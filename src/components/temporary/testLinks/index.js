import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./testLinks.hbs'
import './testLinks.scss'

export const render = Handlebars.compile(tmpl)
