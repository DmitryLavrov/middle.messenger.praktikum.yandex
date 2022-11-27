import tmpl from './sendBox.hbs'
import {Block} from '../../../../core/block'
import './sendBox.scss'
import {SendBoxProps} from '../messagesBoxTypes'

export class SendBox extends Block<SendBoxProps> {
  constructor(props: SendBoxProps) {
    super({...props, tagName: 'div'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
