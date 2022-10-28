// @ts-ignore
import tmpl from './button.hbs'
import './button.scss'
import Block from '../../core/block'
import {ButtonProps, Props} from '../../core/types'

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props)
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
