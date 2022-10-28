// @ts-ignore
import tmpl from './formPage.hbs'
import Block from '../../core/block'
import {FormPageProps, Props} from '../../core/types'
import './formPage.scss'

export default class FormPage extends Block {
  constructor(props: FormPageProps) {
    super('main', props)
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
