import {Block} from '../../../../core/block'
import {BlockProps, Indexed} from '../../../../core/types'

export type ProfileProps = {
  childAvatar?: Block<BlockProps>
  childForm?: Block<BlockProps>
  attrClass?: string
  user?: Indexed
}
