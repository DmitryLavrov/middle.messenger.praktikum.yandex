// @ts-ignore
import tmpl from './profilePage.hbs'
import Block from '../../core/block'
import {ProfilePageProps, Props} from '../../core/types'
import './profilePage.scss'

export default class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
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
