import tmpl from './messageForm.hbs'
import {Block} from '../../core/block'
import {MessageFormProps} from '../../core/types'
import './messageForm.scss'

export class MessageForm extends Block<MessageFormProps> {
  constructor(props: MessageFormProps) {
    super('form', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
