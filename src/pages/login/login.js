import {render as renderFormPage} from '../../layout/formPage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'

import '../../styles/main.scss'

const props = {
  form: {
    title: 'Welcome',
    fields: [
      {
        name: 'login',
        label: 'Login',
        type: 'text',
        placeholder: 'Enter your login'
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
      }
    ],
    buttons: [
      {
          label: 'Enter',
          isButton: true,
          type: 'submit'
      },
      {
          label: 'Register',
          isButton: false,
          href: 'my href'
      }
    ]
  }
}

document.querySelector('#root').innerHTML = renderFormPage(props) + renderTestLinks();
