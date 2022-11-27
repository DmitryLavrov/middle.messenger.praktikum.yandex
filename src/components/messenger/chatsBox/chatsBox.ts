import tmpl from './chatsBox/chatsBox.hbs'
import {Block} from '../../../core/block'
import {BlockProps, ControllerResponse} from '../../../core/types'
import './chatsBox/chatsBox.scss'
import {withChats} from '../../../services/store/storeHoc'
import {chatsController} from '../../../controllers/chatsController'
import {chatsBoxProps} from './chatsBoxProps'
import {isEqual} from '../../../utils/helpers'
import {Chats} from '../../../services/store/storeTypes'
import {ChatsBoxProps} from './chatsBoxTypes'

export class ChatsBox extends Block<ChatsBoxProps> {
  constructor(props: ChatsBoxProps) {
    super({...props, tagName: 'div'})
  }

  componentDidMount(): void {
    chatsController.getChats({offset: 0, limit: 10})
      .then(({status}: ControllerResponse) => {
        if (status === 200) {
          this.setProps(chatsBoxProps(this.props.chats as Chats))
          this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }
      })
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.setProps(chatsBoxProps(this.props.chats as Chats))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const ChatsBoxWithChats = withChats(ChatsBox)
