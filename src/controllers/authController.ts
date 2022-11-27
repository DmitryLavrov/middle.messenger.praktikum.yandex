import {authApi} from '../api/authApi'
import {PlainObject} from '../core/types'
import {store} from '../services/store/store'
import {handleStatus, returnError} from './helpersController'

export class AuthController {
  register(body: PlainObject) {
    return authApi.register(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status}) => {
        store.setState('authorized', true)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  login(body: PlainObject) {
    return authApi.login(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status}) => {
        store.setState('authorized', true)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  logout() {
    return authApi.logout()
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status}) => {
        store.setState('authorized', true)
        store.setState('user', null)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  getUserInfo() {
    return authApi.getUserInfo()
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('user', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }
}

export const authController = new AuthController()
