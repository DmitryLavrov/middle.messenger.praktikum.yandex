import tmpl from './link.hbs'
import './link.scss'
import {Block} from '../../../core/block'
import {LinkProps} from './linkTypes'

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({...props, tagName: 'a'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
