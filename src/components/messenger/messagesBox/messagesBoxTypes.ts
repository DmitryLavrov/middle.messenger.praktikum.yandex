import {Block} from '../../../core/block'
import {BlockProps, Indexed} from '../../../core/types'

export type MessagesBoxProps = {
  childMessageBlocks: Block<BlockProps>[] | null
  childSendBox: Block<BlockProps> | null
  attrClass?: string
  messages?: Indexed[]
}

export type MessageProps = {
  childAvatar?: Block<BlockProps> | string
  dataMine: boolean
  displayName?: string,
  content?: string,
  time?: string,
  attrClass?: string,
}

export type SendBoxProps = {
  childButton: Block<BlockProps>
  childForm: Block<BlockProps>
  attrClass?: string
}

export type SendFormProps = {
  childInput: Block<BlockProps>
  childButton: Block<BlockProps>
  attrClass?: string
  onSubmit: (event: Event) => void
}
