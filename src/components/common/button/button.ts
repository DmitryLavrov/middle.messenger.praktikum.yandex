import tmpl from './button.hbs'
import './button.scss'
import {Block} from '../../../core/block'
import {ButtonProps} from './buttonTypes'

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({...props, tagName: 'button'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
