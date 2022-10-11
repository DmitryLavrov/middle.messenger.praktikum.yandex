import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./chatPage.hbs'
import './chatPage.scss'

export const render = Handlebars.compile(tmpl)
