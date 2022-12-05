import chatAvatar from '../../../images/avatar.svg'
import {Button} from '../../common/button/button'
import {Chat} from './chat/chat'
import {Avatar} from '../../common/avatar/avatar'
import {timeToRenderString} from '../../../utils/helpers'
import {router} from '../../../services/router/router'
import {selectChat} from './chatBoxEventHandlers'
import {Chats} from '../../../services/store/storeTypes'
import {ChatsBoxProps} from './chatsBoxTypes'
import {store} from '../../../services/store/store'

export const chatsBoxProps = (chats?: Chats): ChatsBoxProps => {
  const currentChatId = store.getState().currentChat?.chatId

  return {
    attrClass: 'chats-box',
    childChatBlocks: chats ? chats.map(chat => new Chat({
      childChatAvatar: chat.avatar ? new Avatar({
        attrClass: 'img-chat-avatar',
        attrSrc: `https://ya-praktikum.tech/api/v2/resources${chat.avatar}`,
        attrAlt: 'Chat avatar'
      }) : chatAvatar,
      title: chat.title,
      lastMessage: chat.last_message?.content,
      time: timeToRenderString(chat.last_message?.time),
      unreadCount: chat.unread_count,
      dataChatId: chat.id,
      attrClass: `chat-box${chat.id === currentChatId ? ' selected' : ''}`,
      onClick: selectChat
    }))
      : [],
    childButton: new Button({
      childLabel: 'New chat',
      attrType: 'button',
      attrClass: 'button',
      onClick: (event) => {
        event.preventDefault()
        router.go('/messenger/newChat')
      }
    })
  }
}
