import tmpl from './field.hbs'
import {Block} from '../../core/block'
import {FieldProps} from '../../core/types'
import './field.scss'

export class Field extends Block<FieldProps> {
  constructor(props: FieldProps) {
    super('div', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
