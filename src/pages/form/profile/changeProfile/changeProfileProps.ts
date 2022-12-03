import {Form} from '../../../../components/form/form/form'
import {FieldBox} from '../../../../components/form/fieldBox/fieldBox'
import {Button} from '../../../../components/common/button/button'
import {Input} from '../../../../components/form/input/input'
import {submitChangeProfile, inputBlur, inputFocus} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {Indexed} from '../../../../core/types'
import {router} from '../../../../services/router/router'
import {ProfileProps} from '../profile/profileTypes'

export const changeProfileProps = (user: Indexed | undefined): ProfileProps => ({
  childForm: new Form({
    title: 'Change profile',
    onSubmit: submitChangeProfile,
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
          attrPlaceholder: 'Enter your login',
          attrValue: (user?.login ?? '') as string,
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'email',
        label: 'Email',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'email',
          attrName: 'email',
          attrType: 'email',
          attrPlaceholder: 'Enter your email',
          attrValue: (user?.email ?? '') as string,
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'first_name',
        label: 'Name',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'first_name',
          attrName: 'first_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your name',
          attrValue: (user?.first_name ?? '') as string,
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'second_name',
        label: 'Surname',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'second_name',
          attrName: 'second_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your surname',
          attrValue: (user?.second_name ?? '') as string,
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'display_name',
        label: 'Display name',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'display_name',
          attrName: 'display_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your name to display',
          attrValue: (user?.display_name ?? '') as string,
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'phone',
        label: 'Phone',
        attrClass: 'form-field',
        childInput: new Input({
          attrId: 'phone',
          attrName: 'phone',
          attrType: 'phone',
          attrPlaceholder: '+7999999-99-99',
          attrValue: (user?.phone ?? '') as string,
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
