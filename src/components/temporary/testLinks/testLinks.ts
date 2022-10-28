// @ts-ignore
import tmpl from './testLinks.hbs'
import Block from '../../../core/block'
import {Props, TestLinksProps} from '../../../core/types'
import './testLinks.scss'

export default class TestLinks extends Block {
  constructor(props: TestLinksProps = {}) {
    super('div', props)
  }

  // @ts-ignore
  componentDidMount(oldProps: Props): void {
    // console.log('componentDidMount | oldProps:', oldProps)
  }

  // @ts-ignore
  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    // console.log('componentDidUpdate | oldProps:', oldProps, ' | newProps:', newProps)
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
