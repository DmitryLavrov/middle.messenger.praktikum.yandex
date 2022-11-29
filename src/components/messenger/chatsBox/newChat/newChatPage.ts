import tmpl from '../../../../pages/form/common/formPage.hbs'
import {Block} from '../../../../core/block'
import {BlockProps} from '../../../../core/types'
import '../../../../pages/form/common/formPage.scss'
import {newChatProps} from './newChatProps'
import {isEqual} from '../../../../utils/helpers'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export class NewChatPage extends Block<FormPageProps> {
  constructor(props: FormPageProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount() {
    this.setProps(newChatProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.setProps(newChatProps())
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
