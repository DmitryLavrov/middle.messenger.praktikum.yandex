// @ts-ignore
import tmpl from './input.hbs'
import Block from '../../core/block'
import {InputProps, Props} from '../../core/types'
import './input.scss'

export default class Input extends Block {
  constructor(props: InputProps) {
    super('input', props)
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
