import tmpl from './chatPage.hbs'
import {Block} from '../../core/block'
import {ChatPageProps} from '../../core/types'
import './chatPage.scss'

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super('main', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
