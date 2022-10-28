// @ts-ignore
import tmpl from './messageForm.hbs'
import Block from '../../core/block'
import {MessageFormProps, Props} from '../../core/types'
import './messageForm.scss'

export default class MessageForm extends Block {
  constructor(props: MessageFormProps) {
    super('form', props)
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
