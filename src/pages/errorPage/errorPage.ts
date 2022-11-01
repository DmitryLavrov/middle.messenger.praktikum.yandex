import tmpl from './errorPage.hbs'
import {Block} from '../../core/block'
import {ErrorPageProps} from '../../core/types'
import './errorPage.scss'

export class ErrorPage extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super('main', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
