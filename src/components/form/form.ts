import tmpl from './form.hbs'
import {Block} from '../../core/block'
import {FormProps} from '../../core/types'
import './form.scss'

export class Form extends Block {
  constructor(props: FormProps) {
    super('div', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
