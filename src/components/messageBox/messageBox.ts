import tmpl from './messageBox.hbs'
import {Block} from '../../core/block'
import {MessageBoxProps} from '../../core/types'
import './messageBox.scss'

export class MessageBox extends Block<MessageBoxProps> {
  constructor(props: MessageBoxProps) {
    super('div', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
