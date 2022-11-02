import {ProfilePage} from '../pages/profilePage/profilePage'
import {Form} from '../components/form/form'
import {Field} from '../components/formField/field'
import {Button} from '../components/button/button'
import {TestLinks} from '../components/temporary/testLinks/testLinks'
import {render} from '../utils/renderDOM'
import '../styles/main.scss'
import {InputReadOnly} from '../components/inputReadOnly/inputReadOnly'
import {Link} from '../components/link/link'

const profilePage = new ProfilePage({
  form: new Form({
    title: 'John Smith',
    attrClass: 'profile-box',
    fields: [
      new Field({
        name: 'login',
        label: 'Login',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'login',
          context: 'john'
        })
      }),
      new Field({
        name: 'email',
        label: 'Email',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'email',
          context: 'dd@ggg.com'
        })
      }),
      new Field({
        name: 'name',
        label: 'Name',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'name',
          context: 'John'
        })
      }),
      new Field({
        name: 'surname',
        label: 'Surname',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'surname',
          context: 'Smith'
        })
      }),
      new Field({
        name: 'nickname',
        label: 'Display name',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'nickname',
          context: 'John Smith'
        })
      }),
      new Field({
        name: 'phone',
        label: 'Phone',
        attrClass: 'form-field',
        input: new InputReadOnly({
          attrId: 'phone',
          context: '+7 999 999-99-99'
        })
      })
    ],
    buttons: [
      new Link({
        label: 'Change profile',
        attrHref: '/changeProfile.html'
      }),
      new Link({
        label: 'Change password',
        attrHref: '/changePassword.html'
      }),
      new Button({
        label: 'Back',
        attrType: 'button',
        attrClass: 'button',
        // eslint-disable-next-line no-console
        eventClick: () => console.log('click')
      })
    ]
  }),
  testLinks: new TestLinks()
})

render('#root', profilePage)
