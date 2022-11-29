import tmpl from '../../../../pages/form/common/formPage.hbs'
import {Block} from '../../../../core/block'
import '../../../../pages/form/common/formPage.scss'
import {chatMenuProps} from './chatMenuProps'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export class ChatMenuPage extends Block<FormPageProps> {
  constructor(props: FormPageProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount() {
    this.setProps(chatMenuProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
