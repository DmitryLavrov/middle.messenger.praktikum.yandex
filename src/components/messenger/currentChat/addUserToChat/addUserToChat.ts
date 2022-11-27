import tmpl from '../../../../pages/form/common/formPage.hbs'
import '../../../../pages/form/common/formPage.scss'
import {Block} from '../../../../core/block'
import {addUserToChatProps} from './addUserToChatProps'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export class AddUserToChat extends Block<FormPageProps> {
  constructor(props: FormPageProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount(): void {
    this.setProps(addUserToChatProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  render(): DocumentFragment {
    return this.compile(tmpl)
  }
}

// export const ChangeChatAvatarPageWithCurrentChat = withCurrentChat(ChangeChatAvatarPage) as BlockClass
