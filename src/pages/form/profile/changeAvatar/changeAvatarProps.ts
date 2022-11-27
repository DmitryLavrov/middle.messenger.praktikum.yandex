import {Form} from '../../../../components/form/form/form'
import {Button} from '../../../../components/common/button/button'
import {Input} from '../../../../components/form/input/input'
import '../../../../styles/main.scss'
import {router} from '../../../../services/router'
import {changeAvatar} from './changeAvatarEventHandlers'
import {ProfileProps} from '../profile/profileTypes'

export const changeAvatarProps = (): ProfileProps => ({
  childForm: new Form({
    title: 'Upload file',
    onSubmit: changeAvatar,
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
          router.go('/settings')
        }
      })
    ]
  })
})
