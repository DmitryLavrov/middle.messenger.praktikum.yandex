import {render as renderProfilePage} from '../../layout/profilePage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'
import '../../styles/main.scss'

const props = {
  form: {
    title: 'John Smith',
    fields: [
      {
        name: 'login',
        label: 'Login',
        value: 'john',
        readOnly: true
      },
      {
        name: 'email',
        label: 'Email',
        value: 'dd@ggg.com',
        readOnly: true
      },
      {
        name: 'first_name',
        label: 'Name',
        value: 'John',
        readOnly: true
      },
      {
        name: 'second_name',
        label: 'Surname',
        value: 'Smith',
        readOnly: true
      },
      {
        name: 'display_name',
        label: 'Display name',
        value: 'John Smith',
        readOnly: true
      },
      {
        name: 'phone',
        label: 'Phone',
        value: '+7 999 999-99-99',
        readOnly: true
      }
    ],
    buttons: [
      {
        label: 'Change profile',
        isButton: false,
        href: 'changeProfile'
      },
      {
        label: 'Change password',
        isButton: false,
        href: 'changePassword'
      },
      {
        label: 'Back',
        isButton: true,
        type: 'button'
      }
    ]
  }
}

document.querySelector('#root').innerHTML = renderProfilePage(props) + renderTestLinks()
