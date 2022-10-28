// @ts-ignore
import tmpl from './errorPage.hbs'
import Block from '../../core/block'
import {ErrorPageProps, Props} from '../../core/types'
import './errorPage.scss'

export default class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
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
