// @ts-ignore
import tmpl from './form.hbs'
import Block from '../../core/block'
import {FormProps, Props} from '../../core/types'
import './form.scss'

export default class Form extends Block {
  constructor(props: FormProps) {
    super('div', props)
  }

  // @ts-ignore
  componentDidMount(oldProps: Props): void {
    // console.log('componentDidMount | oldProps:', oldProps)
  }

  // @ts-ignore
  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    // console.log('componentDidUpdate | oldProps:', oldProps, ' | newProps:', newProps)
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
