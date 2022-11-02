import {FormPage} from '../pages/formPage/formPage'
import {Form} from '../components/form/form'
import {Field} from '../components/formField/field'
import {Button} from '../components/button/button'
import {TestLinks} from '../components/temporary/testLinks/testLinks'
import {Input} from '../components/input/input'
import {Link} from '../components/link/link'
import {render} from '../utils/renderDOM'
import {formSubmit, inputBlur, inputFocus} from '../services/eventsHandlers'
import '../styles/main.scss'

const registerPage = new FormPage({
  form: new Form({
    title: 'Registration',
    eventSubmit: formSubmit,
    attrClass: 'form-box',
    fields: [
      new Field({
        name: 'login',
        label: 'Login',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'login',
          attrName: 'login',
          attrType: 'text',
          attrPlaceholder: 'Enter your login',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'email',
        label: 'Email',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'email',
          attrName: 'email',
          attrType: 'email',
          attrPlaceholder: 'Enter your email',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'first_name',
        label: 'Name',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'first_name',
          attrName: 'first_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your name',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'second_name',
        label: 'Surname',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'second_name',
          attrName: 'second_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your surname',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'phone',
        label: 'Phone',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'phone',
          attrName: 'phone',
          attrType: 'phone',
          attrPlaceholder: '+7999999-99-99',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'password',
        label: 'Password',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'password',
          attrName: 'password',
          attrType: 'password',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'passwordRepeated',
        label: 'Repeat password',
        attrClass: 'form-field',
        input: new Input({
          attrId: 'passwordRepeated',
          attrName: 'passwordRepeated',
          attrType: 'password',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      })
    ],
    buttons: [
      new Button({
        label: 'Register',
        attrClass: 'button',
        attrType: 'submit'
      }),
      new Link({
        label: 'Back',
        attrClass: 'link',
        attrHref: '/'
      })
    ]
  }),
  testLinks: new TestLinks()
})

render('#root', registerPage)
