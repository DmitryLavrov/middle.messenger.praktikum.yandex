import {StringObject} from '../core/types'
import {validateField, validateForm} from './validation'
import {hideErrorElement, showErrorElement} from './errorHandlers'
import {authController} from '../controllers/authController'
import {router} from './router'
import {userController} from '../controllers/userController'
import {chatsController} from '../controllers/chatsController'

export const submitRegister = async (event: Event) => {
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
    return
  }

  try {
    await authController.register(formData)
    element.reset()
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
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
    return
  }

  try {
    await authController.login(formData)
    element.reset()
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const logout = async (event: Event) => {
  const element = event.target as HTMLElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  try {
    await authController.logout()
    router.go('/')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const goSettings = async (event: Event) => {
  event.preventDefault()

  try {
    await authController.getUserInfo()
    router.go('/settings')
  } catch ({status, errorMessage}) {
    showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const goChangeAvatar = async (event: Event) => {
  event.preventDefault()

  try {
    await authController.getUserInfo()
    router.go('/settings/changeAvatar')
  } catch ({status, errorMessage}) {
    showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const submitChangeProfile = async (event: Event) => {
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
    return
  }

  try {
    await userController.updateProfile(formData)
    router.go('/settings')
  } catch ({status, errorMessage}) {
    showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const submitChangePassword = async (event: Event) => {
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
    return
  }

  try {
    await userController.updatePassword(formData)
    router.go('/settings')
  } catch ({status, errorMessage}) {
    showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
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
    return
  }

  try {
    await chatsController.createChat(formData)
    element.reset()
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    if (status === 400 && errorMessage === 'User already in system') {
      element.reset()
      router.go('/messenger')
    } else {
      showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
    }
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
