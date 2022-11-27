import tmpl from './form.hbs'
import {Block} from '../../../core/block'
import './form.scss'
import {FormProps} from '../formTypes'

export class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    super({...props, tagName: 'div'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
