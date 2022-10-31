import tmpl from './input.hbs'
import {Block} from '../../core/block'
import {InputProps} from '../../core/types'
import './input.scss'

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
