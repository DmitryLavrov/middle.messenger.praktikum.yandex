import {Indexed} from '../core/types'
import {userApi} from '../api/userApi'
import {handleStatus, returnError} from './helpersController'

export class UserController {
  updateProfile(body: Indexed) {
    return userApi.updateProfile(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  updatePassword(body: Indexed) {
    return userApi.updatePassword({oldPassword: body.oldPassword, newPassword: body.password})
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  updateAvatar(body: Indexed) {
    return userApi.updateAvatar(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  async userByLogin(body: Indexed) {
    return userApi.userByLogin(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }
}

export const userController = new UserController()
