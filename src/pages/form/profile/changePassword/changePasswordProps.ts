import {Form} from '../../../../components/form/form/form'
import {FieldBox} from '../../../../components/form/fieldBox/fieldBox'
import {Button} from '../../../../components/common/button/button'
import {Input} from '../../../../components/form/input/input'
import {inputBlur, inputFocus, submitChangePassword} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {router} from '../../../../services/router/router'
import {ProfileProps} from '../profile/profileTypes'

export const changePasswordProps = (): ProfileProps => ({
  childForm: new Form({
    title: 'Change password',
    onSubmit: submitChangePassword,
    attrClass: 'form-box',
    childFields: [
      new FieldBox({
        name: 'oldPassword',
        label: 'Old password',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'oldPassword',
          attrName: 'oldPassword',
          attrType: 'password',
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'password',
        label: 'New password',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'password',
          attrName: 'password',
          attrType: 'password',
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'passwordRepeated',
        label: 'Repeat password',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'passwordRepeated',
          attrName: 'passwordRepeated',
          attrType: 'password',
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      })
    ],
    childButtons: [
      new Button({
        childLabel: 'Save',
        attrClass: 'button',
        attrType: 'submit'
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
