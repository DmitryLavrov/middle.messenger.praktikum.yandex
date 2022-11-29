import {Block} from '../../../core/block'
import {BlockProps} from '../../../core/types'

export type LinkProps = {
  childLabel: string | Block<BlockProps>
  attrHref: string
  attrClass?: string
  onClick?: (event: Event) => void
}
