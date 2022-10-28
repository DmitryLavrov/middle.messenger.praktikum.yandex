// @ts-ignore
import tmpl from './field.hbs'
import Block from '../../core/block'
import {FieldProps, Props} from '../../core/types'
import './field.scss'

export default class Field extends Block {
  constructor(props: FieldProps) {
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
