import {Block} from '../../../core/block'
import {BlockProps, Indexed} from '../../../core/types'

export type MessengerAvatarProps = {
  childAvatar: Block<BlockProps>
  attrClass?: string
  user?: Indexed
}
