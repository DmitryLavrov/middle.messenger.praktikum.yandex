import {Form} from '../../../form/form/form'
import {Button} from '../../../common/button/button'
import '../../../../styles/main.scss'
import {router} from '../../../../services/router'
import {deleteChat} from '../currentChatEventHandlers'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export const chatMenuProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'Current chat',
    attrClass: 'form-box',
    childButtons: [
      new Button({
        childLabel: 'Add user',
        attrClass: 'button',
        attrType: 'button',
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger/chatMenu/addUser')
        }
      }),
      new Button({
        childLabel: 'Delete User',
        attrType: 'button',
        attrClass: 'button',
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger/chatMenu/deleteUser')
        }
      }),
      new Button({
        childLabel: 'Change chat avatar',
        attrType: 'button',
        attrClass: 'button',
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger/chatMenu/changeChatAvatar')
        }
      }),
      new Button({
        childLabel: 'Delete chat',
        attrType: 'button',
        attrClass: 'button',
        onClick: deleteChat
      }),
      new Button({
        childLabel: 'Back',
        attrType: 'button',
        attrClass: 'button',
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger')
        }
      })
    ]
  })
})
