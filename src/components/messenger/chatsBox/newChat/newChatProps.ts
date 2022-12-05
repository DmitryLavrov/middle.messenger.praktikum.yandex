import {Form} from '../../../form/form/form'
import {FieldBox} from '../../../form/fieldBox/fieldBox'
import {Button} from '../../../common/button/button'
import {inputBlur, inputFocus, submitNewChat} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {Input} from '../../../form/input/input'
import {router} from '../../../../services/router/router'
import {FormPageProps} from '../../../../pages/form/formPageTypes'

export const newChatProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'New chat',
    onSubmit: submitNewChat,
    attrClass: 'form-box',
    childFields: [
      new FieldBox({
        name: 'title',
        label: 'Title',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'title',
          attrName: 'title',
          attrType: 'text',
          attrPlaceholder: 'Enter chat title',
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
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger')
        }
      })
    ]
  })
})
