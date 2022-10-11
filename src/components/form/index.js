import Handlebars from 'handlebars'

import {render as renderButton} from '../../components/button'
import {render as renderField} from '../../components/form/field'

import tmpl from 'bundle-text:./form.hbs'
import './form.scss'

export const render = (props) => {
  const renderForm = Handlebars.compile(tmpl)

  const newProps = JSON.parse(JSON.stringify(props))

  // Update fields with node values from template
  newProps.form.fields.forEach((value, i, arr) => {
    arr[i] = {field: renderField(value)}
  })

  // Update buttons with node values from template
  newProps.form.buttons.forEach((value, i, arr) => {
    arr[i] = {button: renderButton(value)}
  })

  return renderForm(newProps)
}
