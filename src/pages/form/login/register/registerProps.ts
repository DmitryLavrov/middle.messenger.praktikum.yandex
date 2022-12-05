import {Form} from '../../../../components/form/form/form'
import {FieldBox} from '../../../../components/form/fieldBox/fieldBox'
import {Button} from '../../../../components/common/button/button'
import {Input} from '../../../../components/form/input/input'
import {Link} from '../../../../components/common/link/link'
import {submitRegister, inputBlur, inputFocus} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {router} from '../../../../services/router/router'
import {FormPageProps} from '../../formPageTypes'

export const registerProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'Registration',
    onSubmit: submitRegister,
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
          onFocus: inputFocus,
          onBlur: inputBlur
        })
      }),
      new FieldBox({
        name: 'password',
        label: 'Password',
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
        childLabel: 'Register',
        attrClass: 'button',
        attrType: 'submit'
      }),
      new Link({
        childLabel: 'Back',
        attrClass: 'link',
        attrHref: '/',
        onClick: event => {
          event.preventDefault()
          router.go('/')
        }
      })
    ]
  })
})
