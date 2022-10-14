import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./errorPage.hbs'
import './errorPage.scss'

export const render = Handlebars.compile(tmpl)
