import tmpl from './formPage.hbs'
import {Block} from '../../core/block'
import {FormPageProps} from '../../core/types'
import './formPage.scss'

export class FormPage extends Block {
  constructor(props: FormPageProps) {
    super('main', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
