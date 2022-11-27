import {Block} from '../../../core/block'
import {BlockProps} from '../../../core/types'

export type ButtonProps = {
  childLabel: string | Block<BlockProps>
  attrType: string
  attrClass?: string
  onClick?: (event: Event) => void
}
