import {ResponseController} from '../core/types'

export const handleStatus = ({status, response}: ResponseController): ResponseController => {
  if (status === 200) {
    return {status, response}
  }
  throw {status, errorMessage: response?.reason}
}

export const returnError = ({status, errorMessage}: ResponseController) => ({status: status ?? 500, errorMessage: errorMessage ?? 'Network error'})
