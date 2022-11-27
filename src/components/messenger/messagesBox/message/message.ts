import tmpl from './message.hbs'
import {Block} from '../../../../core/block'
import './message.scss'
import {MessageProps} from '../messagesBoxTypes'

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super({...props, tagName: 'li'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
