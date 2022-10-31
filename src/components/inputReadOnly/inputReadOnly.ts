import tmpl from './inputReadOnly.hbs'
import {Block} from '../../core/block'
import {InputReadOnlyProps} from '../../core/types'
import './inputReadOnly.scss'

export class InputReadOnly extends Block {
  constructor(props: InputReadOnlyProps) {
    super('span', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
