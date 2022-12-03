import {Form} from '../../../form/form/form'
import {FieldBox} from '../../../form/fieldBox/fieldBox'
import {Button} from '../../../common/button/button'
import {inputBlur, inputFocus} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {Input} from '../../../form/input/input'
import {router} from '../../../../services/router/router'
import {submitAddUserToChat} from '../currentChatEventHandlers'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export const addUserToChatProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'Please type user login',
    onSubmit: submitAddUserToChat,
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
          attrPlaceholder: 'Enter login to add',
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
