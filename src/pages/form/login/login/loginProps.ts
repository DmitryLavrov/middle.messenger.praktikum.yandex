import {Form} from '../../../../components/form/form/form'
import {FieldBox} from '../../../../components/form/fieldBox/fieldBox'
import {Button} from '../../../../components/common/button/button'
import {submitLogin, inputBlur, inputFocus} from '../../../../services/eventHandlers'
import '../../../../styles/main.scss'
import {Link} from '../../../../components/common/link/link'
import {Input} from '../../../../components/form/input/input'
import {router} from '../../../../services/router/router'
import {FormPageProps} from '../../formPageTypes'

export const loginProps = (): FormPageProps => ({
  childForm: new Form({
    title: 'Welcome',
    onSubmit: submitLogin,
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
      })
    ],
    childButtons: [
      new Button({
        childLabel: 'Enter',
        attrClass: 'button',
        attrType: 'submit'
      }),
      new Link({
        childLabel: 'Register',
        attrClass: 'link',
        attrHref: '/sign-up',
        onClick: event => {
          event.preventDefault()
          router.go('/sign-up')
        }
      })
    ]
  })
})
