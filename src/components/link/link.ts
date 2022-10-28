// @ts-ignore
import tmpl from './link.hbs'
import './link.scss'
import Block from '../../core/block'
import {LinkProps, Props} from '../../core/types'

export default class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props)
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
