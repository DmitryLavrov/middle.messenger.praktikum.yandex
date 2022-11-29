import chatAvatar from 'bundle-text:../../../images/avatar.svg'
import {Avatar} from '../../common/avatar/avatar'
import {store} from '../../../services/store/store'
import {Button} from '../../common/button/button'
import {router} from '../../../services/router'
import {CurrentChatBoxProps} from './currentChatBox/currentChatBoxTypes'
import {CurrentChat, User} from '../../../services/store/storeTypes'

export const currentChatProps = (currentChat?: CurrentChat): CurrentChatBoxProps => {
  const chatId = currentChat?.chatId
  const users = currentChat?.users
  const {chats} = store.getState()

  const userList = users?.map((user: User) => user.login).join(', ') ?? null
  const title = chats?.find(chat => chat.id === chatId)?.title ?? null
  const avatarUrl = chats?.find(chat => chat.id === chatId)?.avatar ?? null

  return {
    attrClass: 'current-chat-box',
    childAvatar: avatarUrl ? new Avatar({
      attrClass: 'img-chat-avatar',
      attrSrc: `https://ya-praktikum.tech/api/v2/resources${avatarUrl}`,
      attrAlt: 'Chat avatar'
    }) : chatAvatar,
    childTitle: title,
    childUserList: userList,
    childButton: chatId ? new Button({
      childLabel: 'Edit',
      attrType: 'button',
      attrClass: 'button',
      onClick: (event) => {
        event.preventDefault()
        router.go('/messenger/chatMenu')
      }
    }) : null
  }
}
