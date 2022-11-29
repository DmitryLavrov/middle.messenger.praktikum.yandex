import tmpl from './errorPage.hbs'
import {Block} from '../../core/block'
import './errorPage.scss'
import {ErrorPageProps} from './errorPageTypes'

export class ErrorPage extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super({...props, tagName: 'main'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
