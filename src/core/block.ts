import Handlebars from 'handlebars'
import {EventBus} from './eventBus'
import {BlockChildren, BlockChildrenArray, BlockProps} from './types'
import {deepClone, isEqual} from '../utils/helpers'

const EVENT_PREFIX = 'on'
const ATTRIBUTE_PREFIX = 'attr'
const DATA_PREFIX = 'data'

export abstract class Block<T extends BlockProps> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }

  private readonly _tagName: string
  private _element: HTMLElement
  protected props: T
  protected children: BlockChildren
  protected childrenArray: BlockChildrenArray
  protected eventBus: EventBus
  private readonly _id: string

  // =====================================================================
  // constructor
  protected constructor(propsAndChildren: BlockProps = {}) {
    this._tagName = (propsAndChildren.tagName ? propsAndChildren.tagName : 'div') as string
    const {children, childrenArray, props} = this._getChildren(propsAndChildren)

    this._id = Math.random().toString(36).slice(2)

    this.children = children
    this.childrenArray = childrenArray
    this.props = this._makePropsProxy({...props, id: this._id}) as T

    this.eventBus = new EventBus()
    this._registerEvents()
    this.eventBus.emit(Block.EVENTS.INIT)
  }

  // =====================================================================
  // _registerEvents
  private _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  // =====================================================================
  // Event INIT
  private init() {
    this._element = this._createDocumentElement(this._tagName)
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName)
    if (this._id) {
      element.dataset.id = this._id
    }

    // attrClass --> class, attrHref --> href
    Object.entries(this.props)
      .filter(([key]) => key.startsWith(ATTRIBUTE_PREFIX))
      .forEach(([key, value]) => {
        const attributeName = key.slice(ATTRIBUTE_PREFIX.length).toLowerCase()
        element.setAttribute(attributeName, value as string)
      })

    // dataChatid --> [data-chatid]
    Object.entries(this.props)
      .filter(([key]) => key.startsWith(DATA_PREFIX))
      .forEach(([key, value]) => {
        const attributeName = key.slice(DATA_PREFIX.length).toLowerCase()
        element.dataset[attributeName] = value?.toString()
      })
    return element
  }

  // =====================================================================
  // Event ComponentDidMount
  private _componentDidMount() {
    if (this.componentDidMount) {
      this.componentDidMount()
    } else {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidMount?(): void

  dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  // =====================================================================
  // Event ComponentDidUpdate
  private _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    let needRender = true
    this.componentDidUpdate && (needRender = this.componentDidUpdate(oldProps, newProps))
    if (needRender) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidUpdate?(oldProps: BlockProps, newProps: BlockProps): boolean

  // =====================================================================
  // setProps(newPropsAndChildren)
  setProps(newPropsAndChildren: BlockProps) {
    if (!newPropsAndChildren) {
      return
    }
    const {children, childrenArray, props} = this._getChildren(newPropsAndChildren)

    Object.assign(this.props, props)
    Object.assign(this.children, children)
    Object.assign(this.childrenArray, childrenArray)
  }

  // =====================================================================
  // Getter element
  get element() {
    return this._element
  }

  // =====================================================================
  // RENDER
  private _render() {
    if (this.render) {
      const fragment = this.render()

      this._removeEvents()
      this._element.innerHTML = ''
      this._element.appendChild(fragment)
      this._addEvents()
    }
  }

  protected render?(): DocumentFragment

  // =====================================================================
  // _addEvents
  private _addEvents(): void {
    Object.entries(this.props)
      .filter(([key]) => key.startsWith(EVENT_PREFIX))
      .forEach(([key, value]) => {
        const eventName = key.slice(EVENT_PREFIX.length).toLowerCase()
        this._element.addEventListener(eventName, value as () => {}, true)
      })
  }

  // =====================================================================
  // _removeEvents
  private _removeEvents(): void {
    Object.entries(this.props)
      .filter(([key]) => key.startsWith(EVENT_PREFIX))
      .forEach(([key, value]) => {
        const eventName = key.slice(EVENT_PREFIX.length).toLowerCase()
        this._element.removeEventListener(eventName, value as () => {}, true)
      })
  }

  // =====================================================================
  // _makePropsProxy
  private _makePropsProxy(props: BlockProps) {
    return new Proxy(props, {
      get: (target: BlockProps, prop: string) => target[prop],

      set: (target: BlockProps, prop: string, value: BlockProps): boolean => {
        if (isEqual(target[prop], value)) {
          return true
        }

        const oldTarget = deepClone(target)
        target[prop] = value

        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget as BlockProps, target)
        return true
      }
    })
  }

  // =====================================================================
  // _getChildren
  private _getChildren(propsAndChildren: BlockProps | BlockChildren | BlockChildrenArray) {
    const children: BlockChildren = {}
    const childrenArray: BlockChildrenArray = {}
    const props: BlockProps = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (key.startsWith('child') && Array.isArray(value) && (value[0] instanceof Block)) {
        childrenArray[key] = value as Block<BlockProps>[]
      } else if (key.startsWith('child') && (value instanceof Block)) {
        children[key] = value as Block<BlockProps>
      } else {
        props[key] = value
      }
    })

    return {children, childrenArray, props}
  }

  // =====================================================================
  // COMPILE
  compile(tmpl: string, props: BlockProps | {} = {}) {
    const propsAndStubs: BlockProps | {} = deepClone(props)

    // Make stubs for children
    Object.entries(this.children).forEach(([key, child]) => {
      if (child._id) {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`
      } else {
        throw new Error(`Child element without id. Please check props \n ${JSON.stringify(child.props, null, 2)}`)
      }
    })

    // Make stubs for childrenArrays
    Object.entries(this.childrenArray).forEach(([key, childArray]) => {
      propsAndStubs[key] = childArray.map(child => {
        // fields --> field, buttons --> button
        const keySliced = key.endsWith('s') ? key.slice(0, -1) : key
        if (child._id) {
          return {[keySliced]: `<div data-id="${child._id}"></div>`}
        }
        throw new Error(`Child element without id. Please check props \n ${JSON.stringify(child, null, 2)}`)
      })
    })

    // Create fragment populated with stubs
    const fragment = document.createElement('template') as HTMLTemplateElement
    const template = Handlebars.compile(tmpl)
    fragment.innerHTML = template(propsAndStubs)

    // Replace fragment stubs with element for children
    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      if (stub) {
        stub.replaceWith(child.element)
      } else {
        throw new Error(`Can't find child element. \nPlease check template \n\n${tmpl} \n and propsAndStubs\n\n${JSON.stringify(propsAndStubs, null, 2)}`)
      }
    })

    // Replace fragment stubs with element for childrenArray
    Object.values(this.childrenArray).forEach(childArray => {
      childArray.forEach(child => {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
        if (stub) {
          stub.replaceWith(child.element)
        } else {
          throw new Error(`Can't find child element. \nPlease check template \n\n${tmpl} \n and propsAndStubs\n\n${JSON.stringify(propsAndStubs, null, 2)}`)
        }
      })
    })

    return fragment.content
  }

  // =====================================================================
  // show & hide
  show() {
    this._element.style.display = 'block'
    this.dispatchComponentDidMount()
  }

  hide() {
    this._element.style.display = 'none'
  }
}
