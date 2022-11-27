import tmpl from './input.hbs'
import {Block} from '../../../core/block'
import './input.scss'
import {InputProps} from '../formTypes'

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({...props, tagName: 'input'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
