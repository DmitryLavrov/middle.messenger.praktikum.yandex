import {FormData} from '../core/types'
import {validateField, validateForm} from './validation'

export const formSubmit = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLElement
  const formData: FormData = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    const errorElement = (element.querySelector('.form-error-message')) as HTMLElement
    showErrorElement(errorElement, validateResult)
    setTimeout(() => hideErrorElement(errorElement), 5000)
  }
  // eslint-disable-next-line no-console
  console.log('Form data:', formData)
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

function showErrorElement(element: HTMLElement | null | undefined, message: string): void {
  if (element) {
    element.textContent = message
    element.style.display = 'block'
  }
}

function hideErrorElement(element: HTMLElement | null | undefined): void {
  if (element) {
    element.style.display = 'none'
  }
}
