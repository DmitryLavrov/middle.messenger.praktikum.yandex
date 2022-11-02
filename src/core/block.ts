import Handlebars from 'handlebars'
import {EventBus} from './eventBus'
import {Children, ChildrenArray, Props} from './types'

export abstract class Block<T extends Props> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }

  private readonly _tagName: string
  private _element: HTMLElement
  protected props: T
  protected children: Children
  protected childrenArray: ChildrenArray
  private eventBus: EventBus
  private readonly _id: string

  // =====================================================================
  // constructor
  protected constructor(tagName = 'div', propsAndChildren = {}) {
    this._tagName = tagName
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
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName)
    if (this._id) {
      element.dataset.id = this._id
    }
    Object.entries(this.props)
      .filter(([key]) => key.startsWith('attr'))
      .forEach(([key, value]) => {
        const attributeName = key.slice(4).toLowerCase()
        element.setAttribute(attributeName, value as string)
      })
    return element
  }

  // =====================================================================
  // Event CDM
  private _componentDidMount() {
    this.componentDidMount && this.componentDidMount(this.props)
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  protected componentDidMount?(oldProps: Props): void

  public dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  // =====================================================================
  // Event CDU
  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    let needRender = true

    this.componentDidUpdate && (needRender = this.componentDidUpdate(oldProps, newProps))
    if (needRender) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidUpdate?(oldProps: Props, newProps: Props): boolean

  public setProps(newProps: Props) {
    if (!newProps) {
      return
    }

    Object.assign(this.props, newProps)
    this.eventBus.emit(Block.EVENTS.FLOW_CDU)
  }

  // =====================================================================
  // Getter element
  public get element() {
    return this._element
  }

  // =====================================================================
  // RENDER
  private _render() {
    const fragment = this.render()

    this._removeEvents()

    this._element.innerHTML = ''
    this._element.appendChild(fragment)
    this._addEvents()
  }

  public abstract render(): DocumentFragment

  // =====================================================================
  // _addEvents
  private _addEvents(): void {
    Object.entries(this.props)
      .filter(([key]) => key.startsWith('event'))
      .forEach(([key, value]) => {
        const eventName = key.slice(5).toLowerCase()
        this._element.addEventListener(eventName, value as () => {}, true)
      })
  }

  // =====================================================================
  // _removeEvents
  private _removeEvents(): void {
    Object.entries(this.props)
      .filter(([key]) => key.startsWith('event'))
      .forEach(([key, value]) => {
        const eventName = key.slice(5).toLowerCase()
        this._element.removeEventListener(eventName, value as () => {}, true)
      })
  }

  // =====================================================================
  // _makePropsProxy
  private _makePropsProxy(props: Props) {
    return new Proxy(props, {
      get: (target: Props, prop: string) => target[prop],

      set: (target: Props, prop: string, value: string): boolean => {
        const oldProps = target[prop]
        if (oldProps === value) {
          return false
        }
        target[prop] = value
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
        return true
      },

      deleteProperty: (target: Props, prop: string) => {
        if (prop.indexOf('_') === 0) {
          throw new Error('Access denied')
        }
        const oldProps = target[prop]
        delete target[prop]
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target[prop])
        return true
      }
    })
  }

  // =====================================================================
  // _getChildren
  private _getChildren(propsAndChildren: Props | Children | Children[]) {
    const children: Children = {}
    const childrenArray: ChildrenArray = {}
    const props: Props = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (Array.isArray(value) && value.every(i => (i instanceof Block))) {
        childrenArray[key] = value
      } else {
        props[key] = value
      }
    })

    return {children, childrenArray, props}
  }

  // =====================================================================
  // COMPILE
  compile(tmpl: string, props: Props = {}) {
    const propsAndStubs: Props = {...props}

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
        throw new Error(`Child element without id. Please check props \n ${JSON.stringify(child.props, null, 2)}`)
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
  public show() {
    this._element.style.display = 'block'
  }

  public hide() {
    this._element.style.display = 'none'
  }
}
