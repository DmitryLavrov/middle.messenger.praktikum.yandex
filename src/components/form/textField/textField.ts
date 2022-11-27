import tmpl from './textField.hbs'
import {Block} from '../../../core/block'
import './textField.scss'
import {TextFieldProps} from '../formTypes'

export class TextField extends Block<TextFieldProps> {
  constructor(props: TextFieldProps) {
    super({...props, tagName: 'span'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
