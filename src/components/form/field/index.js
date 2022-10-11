import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./field.hbs'
import './field.scss'

export const render = Handlebars.compile(tmpl)
