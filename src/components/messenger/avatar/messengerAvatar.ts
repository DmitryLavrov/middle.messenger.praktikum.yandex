import tmpl from './messengerAvatar.hbs'
import {Block} from '../../../core/block'
import {BlockProps, ControllerResponse} from '../../../core/types'
import './messengerAvatar.scss'
import {withUser} from '../../../services/store/storeHoc'
import {authController} from '../../../controllers/authController'
import {messengerAvatarProps} from './messengerAvatarProps'
import {isEqual} from '../../../utils/helpers'
import {MessengerAvatarProps} from './mesengerAvatarTypes'

class MessengerAvatar extends Block<MessengerAvatarProps> {
  constructor(props: MessengerAvatarProps) {
    super({...props, tagName: 'div'})
  }

  componentDidMount(): void {
    authController.getUserInfo()
      .then(({status}: ControllerResponse) => {
        if (status === 200) {
          this.setProps(messengerAvatarProps(this.props.user))
          this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }
      })
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.setProps(messengerAvatarProps(this.props.user))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const MessengerAvatarWithUser = withUser(MessengerAvatar)
