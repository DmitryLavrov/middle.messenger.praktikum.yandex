import tmpl from './link.hbs'
import './link.scss'
import {Block} from '../../core/block'
import {LinkProps} from '../../core/types'

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('a', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
