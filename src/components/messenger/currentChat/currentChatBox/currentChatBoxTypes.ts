import {Block} from '../../../../core/block'
import {BlockProps} from '../../../../core/types'
import {CurrentChat} from '../../../../services/store/storeTypes'

export type CurrentChatBoxProps = {
  childAvatar: Block<BlockProps> | string
  childButton: Block<BlockProps> | null
  childTitle: string | null,
  childUserList: string | null,
  attrClass?: string,
  currentChat?: CurrentChat
}
