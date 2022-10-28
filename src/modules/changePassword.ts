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
    title: 'Change password',
    eventSubmit: formSubmit,
    attrClass: 'form-box',
    fields: [
      new Field({
        name: 'oldPassword',
        label: 'Old password',
        input: new Input({
          attrId: 'oldPassword',
          attrName: 'oldPassword',
          attrType: 'password',
          eventFocus: inputFocus,
          eventBlur: inputBlur
        })
      }),
      new Field({
        name: 'password',
        label: 'New password',
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
        label: 'Save',
        attrClass: 'button',
        attrType: 'submit'
      })
    ]
  }),
  testLinks: new TestLinks()
})

render('#root', profilePage)
