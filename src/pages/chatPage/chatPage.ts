// @ts-ignore
import tmpl from './chatPage.hbs'
import Block from '../../core/block'
import {ChatPageProps, Props} from '../../core/types'
import './chatPage.scss'

export default class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super('main', props)
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
