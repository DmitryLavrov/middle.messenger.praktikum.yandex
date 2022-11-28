import {StringObject} from '../../../core/types'
import {validateForm} from '../../../services/validation'
import {showErrorElement} from '../../../services/errorHandlers'
import {socketController} from '../../../controllers/socketController'

export const sendMessage = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const formData: StringObject = {}
  const fields = element.querySelectorAll('input')
  fields?.forEach((input: HTMLInputElement) => {
    formData[input.name] = input.value
  })

  const validateResult = validateForm(formData)
  if (validateResult !== null) {
    showErrorElement(null, validateResult)
    return
  }
  socketController.sendMessage(formData.message)
  element.reset()
}
