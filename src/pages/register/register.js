import {render as renderFormPage} from '../../layout/formPage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'
import '../../styles/main.scss'

const props = {
  form: {
    title: 'Registration',
    fields: [
      {
        name: 'login',
        label: 'Login',
        type: 'text',
        placeholder: 'Enter your login'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email'
      },
      {
        name: 'first_name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name'
      },
      {
        name: 'second_name',
        label: 'Surname',
        type: 'text',
        placeholder: 'Enter your surname'
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'phone',
        placeholder: '+7 999 999-99-99'
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
      {
        name: 'passwordRepeated',
        label: 'Repeat password',
        type: 'password',
      }
    ],
    buttons: [
      {
          label: 'Register',
          isButton: true,
          type: 'submit'
      },
      {
          label: 'Back',
          isButton: false,
          href: 'my href'
      }
    ]
  }
}

document.querySelector('#root').innerHTML = renderFormPage(props) + renderTestLinks();
