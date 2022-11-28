import tmpl from '../../../../pages/form/common/formPage.hbs'
import '../../../../pages/form/common/formPage.scss'
import {Block} from '../../../../core/block'
import {deleteUserFromChatProps} from './deleteUserFromChatProps'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export class DeleteUserFromChat extends Block<FormPageProps> {
  constructor(props: FormPageProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount() {
    this.setProps(deleteUserFromChatProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  render(): DocumentFragment {
    return this.compile(tmpl)
  }
}
