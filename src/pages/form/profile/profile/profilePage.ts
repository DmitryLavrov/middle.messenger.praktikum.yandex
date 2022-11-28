import tmpl from './profilePage.hbs'
import {Block} from '../../../../core/block'
import {BlockClass, BlockProps} from '../../../../core/types'
import './profilePage.scss'
import {withUser} from '../../../../services/store/storeHoc'
import {profileProps} from './profileProps'
import {isEqual} from '../../../../utils/helpers'
import {authController} from '../../../../controllers/authController'
import {ProfileProps} from './profileTypes'

export class ProfilePage extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({...props, tagName: 'main'})
  }

  async componentDidMount() {
    await authController.getUserInfo()
    this.setProps(profileProps(this.props.user))
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps.user, newProps.user)) {
      this.setProps(profileProps(this.props.user))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const ProfilePageWithUser = withUser(ProfilePage) as BlockClass
