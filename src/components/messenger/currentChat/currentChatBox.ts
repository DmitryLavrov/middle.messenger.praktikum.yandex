import tmpl from './currentChatBox/currentChatBox.hbs'
import {Block} from '../../../core/block'
import {BlockProps} from '../../../core/types'
import './currentChatBox/currentChatBox.scss'
import {withCurrentChat} from '../../../services/store/storeHoc'
import {currentChatProps} from './currentChatProps'
import {CurrentChatBoxProps} from './currentChatBox/currentChatBoxTypes'
import {isEqual} from '../../../utils/helpers'

class CurrentChatBox extends Block<CurrentChatBoxProps> {
  constructor(props: CurrentChatBoxProps) {
    super({...props, tagName: 'div'})
  }

  componentDidMount() {
    this.setProps(currentChatProps(this.props.currentChat))
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.setProps(currentChatProps(this.props.currentChat))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const CurrentChatBoxWithCurrentChat = withCurrentChat(CurrentChatBox)
