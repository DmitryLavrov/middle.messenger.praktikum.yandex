import userSvg from '../../../../images/user.svg'
import {Form} from '../../../../components/form/form/form'
import {FieldBox} from '../../../../components/form/fieldBox/fieldBox'
import {Button} from '../../../../components/common/button/button'
import '../../../../styles/main.scss'
import {TextField} from '../../../../components/form/textField/textField'
import {Link} from '../../../../components/common/link/link'
import {Indexed} from '../../../../core/types'
import {router} from '../../../../services/router/router'
import {logout} from '../../../../services/eventHandlers'
import {Avatar} from '../../../../components/common/avatar/avatar'
import {ProfileProps} from './profileTypes'

export const profileProps = (user: Indexed | undefined): ProfileProps => ({
  childAvatar: new Link({
    childLabel: user?.avatar ? new Avatar({
      attrSrc: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
      attrAlt: 'Avatar',
      attrClass: 'img-profile-avatar'
    }) : userSvg,
    attrClass: 'link-profile-avatar',
    attrHref: '/settings/changeAvatar',
    onClick: (event) => {
      event.preventDefault()
      router.go('/settings/changeAvatar')
    }
  }),
  childForm: new Form({
    title: `${user?.first_name} ${user?.second_name}`,
    attrClass: 'profile-box',
    childFields: [
      new FieldBox({
        name: 'login',
        label: 'Login',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'login',
          context: user?.login as string
        })
      }),
      new FieldBox({
        name: 'email',
        label: 'Email',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'email',
          context: user?.email as string
        })
      }),
      new FieldBox({
        name: 'name',
        label: 'Name',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'name',
          context: user?.first_name as string
        })
      }),
      new FieldBox({
        name: 'surname',
        label: 'Surname',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'surname',
          context: user?.second_name as string
        })
      }),
      new FieldBox({
        name: 'nickname',
        label: 'Display name',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'nickname',
          context: user?.display_name as string
        })
      }),
      new FieldBox({
        name: 'phone',
        label: 'Phone',
        attrClass: 'form-field',
        childInput: new TextField({
          attrId: 'phone',
          context: user?.phone as string
        })
      })
    ],
    childButtons: [
      new Link({
        childLabel: 'Change profile',
        attrHref: '/settings/changeProfile',
        onClick: (event) => {
          event.preventDefault()
          router.go('/settings/changeProfile')
        }
      }),
      new Link({
        childLabel: 'Change password',
        attrHref: '/settings/changePassword',
        onClick: (event) => {
          event.preventDefault()
          router.go('/settings/changePassword')
        }
      }),
      new Button({
        childLabel: 'Exit',
        attrType: 'button',
        attrClass: 'button',
        onClick: (event) => logout(event)
      }),
      new Button({
        childLabel: 'Back',
        attrType: 'button',
        attrClass: 'button',
        onClick: (event) => {
          event.preventDefault()
          router.go('/messenger')
        }
      })
    ]
  })
})
