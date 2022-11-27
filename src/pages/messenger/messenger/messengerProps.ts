import '../../../styles/main.scss'
import {ChatsBoxWithChats} from '../../../components/messenger/chatsBox/chatsBox'
import {chatsBoxProps} from '../../../components/messenger/chatsBox/chatsBoxProps'
import {MessengerAvatarWithUser} from '../../../components/messenger/avatar/messengerAvatar'
import {messengerAvatarProps} from '../../../components/messenger/avatar/messengerAvatarProps'
import {CurrentChatBoxWithCurrentChat} from '../../../components/messenger/currentChat/currentChatBox'
import {currentChatProps} from '../../../components/messenger/currentChat/currentChatProps'
import {MessagesBoxWithMessages} from '../../../components/messenger/messagesBox/messagesBox'
import {messagesBoxProps} from '../../../components/messenger/messagesBox/messagesBoxProps'
import {MessengerProps} from './messengerTypes'

export const messengerProps = (): MessengerProps => ({
  childAvatar: new MessengerAvatarWithUser(messengerAvatarProps({})),
  childChatsBox: new ChatsBoxWithChats(chatsBoxProps()),
  childCurrentChatBox: new CurrentChatBoxWithCurrentChat(currentChatProps()),
  childMessagesBox: new MessagesBoxWithMessages(messagesBoxProps())
})
