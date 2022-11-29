import {Block} from '../../../core/block'
import {BlockProps, Indexed} from '../../../core/types'

export type MessengerProps = {
  childAvatar?: Block<BlockProps>
  childChatsBox?: Block<BlockProps> | null
  childCurrentChatBox?: Block<BlockProps> | null
  childMessagesBox?: Block<BlockProps>
  attrClass?: string
  user?: Indexed
  currentChat?: Indexed
  chats?: Indexed[]
  messages?: Indexed[]
}
