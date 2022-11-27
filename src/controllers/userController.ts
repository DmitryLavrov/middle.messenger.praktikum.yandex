import {PlainObject} from '../core/types'
import {userApi} from '../api/userApi'
import {handleStatus, returnError} from './helpersController'

export class UserController {
  updateProfile(body: PlainObject) {
    return userApi.updateProfile(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  updatePassword(body: PlainObject) {
    return userApi.updatePassword({oldPassword: body.oldPassword, newPassword: body.password})
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  updateAvatar(body: PlainObject) {
    return userApi.updateAvatar(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  userByLogin(body: PlainObject) {
    return userApi.userByLogin(body)
      .then(({status, response}) => handleStatus({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }
}

export const userController = new UserController()
