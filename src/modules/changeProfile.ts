import Form from '../components/form/form'
import Field from '../components/formField/field'
import Button from '../components/button/button'
import TestLinks from '../components/temporary/testLinks/testLinks'
import FormPage from '../pages/formPage/formPage'
import Input from '../components/input/input'
import {render} from '../utils/renderDOM'
import {formSubmit, inputBlur, inputFocus} from '../services/eventsHandlers'
import '../styles/main.scss'

const profilePage = new FormPage({
  form: new Form({
    title: 'My profile',
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
        name: 'email',
        label: 'Email',
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
        name: 'display_name',
        label: 'Display name',
        input: new Input({
          attrId: 'display_name',
          attrName: 'display_name',
          attrType: 'text',
          attrPlaceholder: 'Enter your name to display',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'phone',
        label: 'Phone',
        input: new Input({
          attrId: 'phone',
          attrName: 'phone',
          attrType: 'phone',
          attrPlaceholder: '+7999999-99-99',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      })
    ],
    buttons: [
      new Button({
        label: 'Save',
        attrClass: 'button',
        attrType: 'submit'
      })
    ]
  }),
  testLinks: new TestLinks()
})

render('#root', profilePage)
