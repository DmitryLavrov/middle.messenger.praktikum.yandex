import {ControllerResponse, ServerResponse} from '../core/types'

export const handleStatus = ({status, response}: ServerResponse): ServerResponse => {
  if (status === 200) {
    return {status, response}
  }
  throw {status, errorMessage: response?.reason}
}

export const returnError = ({status, errorMessage}: ControllerResponse) => ({status: status ?? 500, errorMessage: errorMessage ?? 'Network error'})
