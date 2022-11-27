import {Block} from '../../core/block'
import {BlockProps} from '../../core/types'

export type ErrorPageProps = {
  childLink: Block<BlockProps>
  title: string
  content: string
  attrClass?: string
}
