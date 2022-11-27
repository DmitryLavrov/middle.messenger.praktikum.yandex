import tmpl from './messagesBox/messagesBox.hbs'
import {Block} from '../../../core/block'
import './messagesBox/messagesBox.scss'
import {MessagesBoxProps} from './messagesBoxTypes'
import {withMessages} from '../../../services/store/storeHoc'
import {BlockProps} from '../../../core/types'
import {isEqual} from '../../../utils/helpers'
import {Messages} from '../../../services/store/storeTypes'
import {messagesBoxProps} from './messagesBoxProps'

export class MessagesBox extends Block<MessagesBoxProps> {
  constructor(props: MessagesBoxProps) {
    super({...props, tagName: 'div'})
  }

  componentDidMount(): void {
    this.setProps(messagesBoxProps(this.props.messages as Messages))
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps?.messages, newProps.messagest)) {
      this.setProps(messagesBoxProps(this.props.messages as Messages))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const MessagesBoxWithMessages = withMessages(MessagesBox)
