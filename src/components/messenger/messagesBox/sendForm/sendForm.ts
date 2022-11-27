import tmpl from './sendForm.hbs'
import {Block} from '../../../../core/block'
import './sendForm.scss'
import {SendFormProps} from '../messagesBoxTypes'

export class SendForm extends Block<SendFormProps> {
  constructor(props: SendFormProps) {
    super({...props, tagName: 'form'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
