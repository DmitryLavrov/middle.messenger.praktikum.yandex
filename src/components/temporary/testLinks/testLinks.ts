import tmpl from './testLinks.hbs'
import {Block} from '../../../core/block'
import {TestLinksProps} from '../../../core/types'
import './testLinks.scss'

export class TestLinks extends Block<TestLinksProps> {
  constructor(props: TestLinksProps = {}) {
    super('nav', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
