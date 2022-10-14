import Handlebars from 'handlebars'

import {render as renderForm} from '../../components/form'

import tmpl from 'bundle-text:./profilePage.hbs'
import './profilePage.scss'

export const render = (props) => {
  const renderProfilePage = Handlebars.compile(tmpl)
  return renderProfilePage({form: renderForm(props)})
}
