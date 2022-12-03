import {userController} from '../../../../controllers/userController'
import {router} from '../../../../services/router/router'
import {showErrorElement} from '../../../../services/errorHandlers'

export const changeAvatar = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  try {
    await userController.updateAvatar(new FormData(element))
    router.go('/settings')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}
