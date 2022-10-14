import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./button.hbs'
import './button.scss'

export const render = Handlebars.compile(tmpl)
