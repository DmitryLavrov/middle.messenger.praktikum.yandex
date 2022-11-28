import tmpl from '../../common/formPage.hbs'
import {Block} from '../../../../core/block'
import {BlockClass, BlockProps} from '../../../../core/types'
import '../../common/formPage.scss'
import {isEqual} from '../../../../utils/helpers'
import {authController} from '../../../../controllers/authController'
import {changeProfileProps} from './changeProfileProps'
import {withUser} from '../../../../services/store/storeHoc'
import {ProfileProps} from '../profile/profileTypes'

export class ChangeProfilePage extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super({...props, tagName: 'main'})
  }

  async componentDidMount() {
    await authController.getUserInfo()
    this.setProps(changeProfileProps(this.props.user))
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps.user, newProps.user)) {
      this.setProps(changeProfileProps(this.props.user))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props.user)
  }
}

export const ChangeProfilePageWithUser = withUser(ChangeProfilePage) as BlockClass
