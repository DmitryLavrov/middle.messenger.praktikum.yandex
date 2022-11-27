import {ControllerResponse} from '../../../../core/types'
import {userController} from '../../../../controllers/userController'
import {router} from '../../../../services/router'
import {showErrorElement} from '../../../../services/errorHandlers'

export const changeAvatar = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  userController.updateAvatar(new FormData(element))
    .then(({status, errorMessage}: ControllerResponse) => {
      if (status === 200) {
        router.go('/settings')
      } else {
        showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
      }
    })
}
