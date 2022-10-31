import tmpl from './button.hbs'
import './button.scss'
import {Block} from '../../core/block'
import {ButtonProps} from '../../core/types'

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
