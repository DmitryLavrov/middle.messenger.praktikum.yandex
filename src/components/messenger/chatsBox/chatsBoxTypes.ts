import {Block} from '../../../core/block'
import {BlockProps, Indexed} from '../../../core/types'

export type ChatsBoxProps = {
  childChatBlocks: Block<BlockProps>[] | null
  childButton: Block<BlockProps>
  chats?: Indexed[]
  attrClass?: string
}

export type ChatProps = {
  childChatAvatar?: Block<BlockProps> | string
  title?: string,
  lastMessage?: string,
  time?: string,
  unreadCount?: number,
  dataChatId?: number,
  attrClass?: string,
  onClick?: (event: Event) => void
}
