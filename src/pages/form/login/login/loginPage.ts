import tmpl from '../../common/formPage.hbs'
import {Block} from '../../../../core/block'
import {BlockClass, BlockProps} from '../../../../core/types'
import '../../common/formPage.scss'
import {withUser} from '../../../../services/store/storeHoc'
import {isEqual} from '../../../../utils/helpers'
import {loginProps} from './loginProps'
import {FormPageProps} from '../../formPageTypes'

export class LoginPage extends Block<FormPageProps> {
  constructor(props: FormPageProps) {
    super({...props, tagName: 'main'})
  }

  componentDidMount(): void {
    this.setProps(loginProps())
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps?.user, newProps.user)) {
      this.setProps(loginProps())
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const LoginPageWithUser = withUser(LoginPage) as BlockClass
