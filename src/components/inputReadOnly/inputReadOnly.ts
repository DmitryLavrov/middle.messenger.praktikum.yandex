// @ts-ignore
import tmpl from './inputReadOnly.hbs'
import Block from '../../core/block'
import {InputReadOnlyProps, Props} from '../../core/types'
import './inputReadOnly.scss'

export default class InputReadOnly extends Block {
  constructor(props: InputReadOnlyProps) {
    super('span', props)
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
