import FormPage from '../pages/formPage/formPage'
import Form from '../components/form/form'
import Field from '../components/formField/field'
import Button from '../components/button/button'
import TestLinks from '../components/temporary/testLinks/testLinks'
import {render} from '../utils/renderDOM'
import {formSubmit, inputBlur, inputFocus} from '../services/eventsHandlers'
import '../styles/main.scss'
import Link from '../components/link/link'
import Input from '../components/input/input'

const loginPage = new FormPage({
  form: new Form({
    title: 'Welcome',
    eventSubmit: formSubmit,
    attrClass: 'form-box',
    fields: [
      new Field({
        name: 'login',
        label: 'Login',
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
        name: 'password',
        label: 'Password',
        input: new Input({
          attrId: 'password',
          attrName: 'password',
          attrType: 'password',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      })
    ],
    buttons: [
      new Button({
        label: 'Enter',
        attrClass: 'button',
        attrType: 'submit'
      }),
      new Link({
        label: 'Register',
        attrClass: 'link',
        attrHref: '/register'
      })
    ]
  }),
  testLinks: new TestLinks()
})

render('#root', loginPage)
