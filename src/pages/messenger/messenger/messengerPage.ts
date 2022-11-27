import tmpl from './messengerPage.hbs'
import {Block} from '../../../core/block'
import {BlockClass, BlockProps} from '../../../core/types'
import './messengerPage.scss'
import {withChats, withCurrentChat, withMessages, withUser} from '../../../services/store/storeHoc'
import {isEqual} from '../../../utils/helpers'
import {messengerProps} from './messengerProps'
import {MessengerProps} from './messengerTypes'

export class MessengerPage extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount(): void {
    this.setProps(messengerProps())
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.setProps(messengerProps())
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const MessengerPageWithChats = withUser(withMessages(withCurrentChat(withChats(MessengerPage)))) as BlockClass
// export const MessengerPageWithChats = withUser(withMessages(MessengerPage)) as BlockClass
