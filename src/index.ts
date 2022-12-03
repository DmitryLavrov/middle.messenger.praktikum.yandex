import {router} from './services/router/router'
import {ProfilePageWithUser} from './pages/form/profile/profile/profilePage'
import {MessengerPageWithChats} from './pages/messenger/messenger/messengerPage'
import {LoginPage} from './pages/form/login/login/loginPage'
import {RegisterPage} from './pages/form/login/register/registerPage'
import {ChangeProfilePageWithUser} from './pages/form/profile/changeProfile/changeProfilePage'
import {ChangePasswordPageWithUser} from './pages/form/profile/changePassword/changePasswordPage'
import {ChangeAvatarPageWithUser} from './pages/form/profile/changeAvatar/changeAvatarPage'
import {NewChatPage} from './components/messenger/chatsBox/newChat/newChatPage'
import {ChatMenuPage} from './components/messenger/currentChat/chatMenu/chatMenuPage'
import {
  ChangeChatAvatarPageWithCurrentChat
} from './components/messenger/currentChat/changeChatAvatar/changeChatAvatarPage'
import {AddUserToChat} from './components/messenger/currentChat/addUserToChat/addUserToChat'
import {DeleteUserFromChat} from './components/messenger/currentChat/deleteUserFromChat/deleteUserFromChat'

router
  .use('/', LoginPage)
  .use('/sign-up', RegisterPage)
  .use('/settings', ProfilePageWithUser)
  .use('/settings/changeProfile', ChangeProfilePageWithUser)
  .use('/settings/changePassword', ChangePasswordPageWithUser)
  .use('/settings/changeAvatar', ChangeAvatarPageWithUser)
  .use('/messenger', MessengerPageWithChats)
  .use('/messenger/newChat', NewChatPage)
  .use('/messenger/chatMenu', ChatMenuPage)
  .use('/messenger/chatMenu/changeChatAvatar', ChangeChatAvatarPageWithCurrentChat)
  .use('/messenger/chatMenu/addUser', AddUserToChat)
  .use('/messenger/chatMenu/deleteUser', DeleteUserFromChat)
  .start()
