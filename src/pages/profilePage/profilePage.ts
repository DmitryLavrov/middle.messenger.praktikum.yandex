import tmpl from './profilePage.hbs'
import {Block} from '../../core/block'
import {ProfilePageProps} from '../../core/types'
import './profilePage.scss'

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super('main', props)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
