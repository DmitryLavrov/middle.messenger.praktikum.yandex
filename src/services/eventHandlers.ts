import {StringObject, ControllerResponse} from '../core/types'
import {validateField, validateForm} from './validation'
import {hideErrorElement, showErrorElement} from './errorHandlers'
import {authController} from '../controllers/authController'
import {router} from './router'
import {userController} from '../controllers/userController'
import {chatsController} from '../controllers/chatsController'

export const submitRegister = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(errorElement, validateResult, 5000)
  } else {
    authController.register(formData)
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          element.reset()
          router.go('/messenger')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}

export const submitLogin = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(errorElement, validateResult, 5000)
  } else {
    authController.login(formData)
      .then(({status, errorMessage}: ControllerResponse) => {
        if ((status === 200) || (status === 400 && errorMessage === 'User already in system')) {
          element.reset()
          router.go('/messenger')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}

export const logout = (event: Event): void => {
  const element = event.target as HTMLElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  authController.logout()
    .then(({status, errorMessage}: ControllerResponse) => {
      if (status === 200) {
        router.go('/')
      } else {
        showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
      }
    })
}

export const goSettings = (event: Event): void => {
  event.preventDefault()
  authController.getUserInfo()
    .then(({status}: ControllerResponse) => {
      if (status === 200) {
        router.go('/settings')
      }
    })
}

export const goChangeAvatar = (event: Event): void => {
  event.preventDefault()
  authController.getUserInfo()
    .then(({status}: ControllerResponse) => {
      if (status === 200) {
        router.go('/settings/changeAvatar')
      }
    })
}

export const submitChangeProfile = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(errorElement, validateResult, 5000)
  } else {
    userController.updateProfile(formData)
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          router.go('/settings')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}

export const submitChangePassword = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(errorElement, validateResult, 5000)
  } else {
    userController.updatePassword(formData)
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          router.go('/settings')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}

export const submitNewChat = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(errorElement, validateResult, 5000)
  } else {
    chatsController.createChat(formData)
      .then(({status, errorMessage}: ControllerResponse) => {
        if ((status === 200) || (status === 400 && errorMessage === 'User already in system')) {
          element.reset()
          router.go('/messenger')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}

export const inputFocus = (event: Event): void => {
  const element = event.target as HTMLInputElement
  hideErrorElement(element.parentElement?.parentElement?.querySelector('.error-message'))
}

export const inputBlur = (event: Event): void => {
  const element = event.target as HTMLInputElement
  const validateResult = validateField(element.name, element.value)
  if (validateResult !== null) {
    showErrorElement(element.parentElement?.parentElement?.querySelector('.error-message'), validateResult)
  }
}

export const messageFocus = (event: Event): void => {
  const element = event.target as HTMLInputElement
  element.placeholder = 'Type message here'
}

export const messageBlur = (event: Event): void => {
  const element = event.target as HTMLInputElement
  const validateResult = validateField(element.name, element.value)
  if (validateResult !== null) {
    element.placeholder = validateResult
    element.value = ''
  }
}
