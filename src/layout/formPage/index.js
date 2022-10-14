import Handlebars from 'handlebars'

import {render as renderForm} from '../../components/form'

import tmpl from 'bundle-text:./formPage.hbs'
import './formPage.scss'

export const render = (props) => {
  const renderFormPage = Handlebars.compile(tmpl)
  return renderFormPage({form: renderForm(props)})
}
