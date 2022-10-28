// @ts-ignore
import tmpl from './messageBox.hbs'
import Block from '../../core/block'
import {MessageBoxProps, Props} from '../../core/types'
import './messageBox.scss'

export default class MessageBox extends Block {
  constructor(props: MessageBoxProps) {
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
