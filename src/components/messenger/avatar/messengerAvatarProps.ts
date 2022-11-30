import '../../../styles/main.scss'
import userSvg from '../../../images/user.svg'
import {goSettings} from '../../../services/eventHandlers'
import {Indexed} from '../../../core/types'
import {Avatar} from '../../common/avatar/avatar'
import {Link} from '../../common/link/link'
import {MessengerAvatarProps} from './mesengerAvatarTypes'

export const messengerAvatarProps = (user: Indexed | undefined): MessengerAvatarProps => ({
  childAvatar: new Link({
    childLabel: user?.avatar ? new Avatar({
      attrSrc: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
      attrAlt: 'Avatar',
      attrClass: 'img-messenger-avatar'
    }) : userSvg,
    attrClass: 'link-messenger-avatar',
    attrHref: '/settings',
    onClick: goSettings
  }),
  attrClass: 'messenger-avatar'
})
