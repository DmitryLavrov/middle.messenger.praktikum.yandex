import tmpl from './chat.hbs'
import {Block} from '../../../../core/block'
import './chat.scss'
import {ChatProps} from '../chatsBoxTypes'

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super({...props, tagName: 'div'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
