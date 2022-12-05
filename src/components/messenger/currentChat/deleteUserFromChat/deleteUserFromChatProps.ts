import {Form} from '../../../form/form/form'
import {FieldBox} from '../../../form/fieldBox/fieldBox'
import {Button} from '../../../common/button/button'
import {inputBlur, inputFocus} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {Input} from '../../../form/input/input'
import {router} from '../../../../services/router/router'
import {submitDeleteUserFromChat} from '../currentChatEventHandlers'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export const deleteUserFromChatProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'Please type user login',
    onSubmit: submitDeleteUserFromChat,
    attrClass: 'form-box',
    childFields: [
      new FieldBox({
        name: 'login',
        label: 'Login',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'login',
          attrName: 'login',
          attrType: 'text',
          attrPlaceholder: 'Enter login to delete',
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      })
    ],
    childButtons: [
      new Button({
        childLabel: 'Enter',
        attrClass: 'button',
        attrType: 'submit'
      }),
      new Button({
        childLabel: 'Back',
        attrType: 'button',
        attrClass: 'button',
        onClick: event => {
          event.preventDefault()
          router.go('/messenger')
        }
      })
    ]
  })
})
