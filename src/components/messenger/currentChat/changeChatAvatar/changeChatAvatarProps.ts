import {Form} from '../../../form/form/form'
import {Button} from '../../../common/button/button'
import {Input} from '../../../form/input/input'
import '../../../../styles/main.scss'
import {router} from '../../../../services/router/router'
import {changeChatAvatar} from '../currentChatEventHandlers'
import {ProfileProps} from '../../../../pages/form/profile/profile/profileTypes'

export const changeChatAvatarProps = (): ProfileProps => ({
  childForm: new Form({
    title: 'Upload file',
    onSubmit: changeChatAvatar,
    attrClass: 'form-box',
    childFields: [
      new Input({
        attrName: 'avatar',
        attrId: 'avatar',
        attrClass: 'input-file',
        attrType: 'file',
        attrAccept: 'image/*'
      })
    ],
    childButtons: [
      new Button({
        childLabel: 'Upload',
        attrType: 'submit',
        attrClass: 'button'

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
