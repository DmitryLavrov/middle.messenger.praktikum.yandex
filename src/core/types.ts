import {Block} from './block'
import {ProfilePage} from '../pages/form/profile/profile/profilePage'
import {MessengerPage} from '../pages/messenger/messenger/messengerPage'
import {LoginPage} from '../pages/form/login/login/loginPage'
import {ChangeProfilePage} from '../pages/form/profile/changeProfile/changeProfilePage'
import {RegisterPage} from '../pages/form/login/register/registerPage'
import {ChatMenuPage} from '../components/messenger/currentChat/chatMenu/chatMenuPage'
import {ChangeChatAvatarPage} from '../components/messenger/currentChat/changeChatAvatar/changeChatAvatarPage'

export type BlockProp = string | number | boolean | ((event: Event) => void) | Block<BlockProps> | Block<BlockProps>[] | Block<BlockChildren> | Indexed | Indexed[] | null
export type BlockProps = Record<string, BlockProp>
export type BlockChildren = Record<string, Block<BlockProps>>
export type BlockChildrenArray = Record<string, Block<BlockProps>[]>

export type BlockPage = LoginPage | ChangeProfilePage | RegisterPage | ProfilePage | MessengerPage | ChatMenuPage | ChangeChatAvatarPage
export type BlockClass = (typeof LoginPage) | (typeof ChangeProfilePage) | (typeof RegisterPage) | (typeof ProfilePage)
  | (typeof MessengerPage) | (typeof ChatMenuPage) | (typeof ChangeChatAvatarPage)

export type Listeners = Record<string, Function[]>
export type StringObject = Record<string, string>

export type RouteProps = {
  rootQuery: string
}

export type Indexed<T = any> = {
  [key in string]: T;
}

export type RequestOptions = {
  timeout?: number
  method?: string
  headers?: Record<string, string>
  urlParams?: Indexed
  credentials?: boolean
  body?: Indexed
  retries?: number
}

export type ResponseController = {
  status?: number,
  errorMessage?: string,
  response?: Indexed,
}
