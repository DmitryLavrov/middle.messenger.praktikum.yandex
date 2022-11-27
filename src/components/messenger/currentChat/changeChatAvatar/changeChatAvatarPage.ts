import tmpl from '../../../../pages/form/common/formPage.hbs'
import {BlockClass} from '../../../../core/types'
import '../../../../pages/form/common/formPage.scss'
import {Block} from '../../../../core/block'
import {changeChatAvatarProps} from './changeChatAvatarProps'
import {withCurrentChat} from '../../../../services/store/storeHoc'
import {ChatProps} from '../../chatsBox/chatsBoxTypes'

export class ChangeChatAvatarPage extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount(): void {
    this.setProps(changeChatAvatarProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  render(): DocumentFragment {
    return this.compile(tmpl)
  }
}

export const ChangeChatAvatarPageWithCurrentChat = withCurrentChat(ChangeChatAvatarPage) as BlockClass
