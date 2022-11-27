import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/httpTransport'
import {PlainObject} from '../core/types'

class UserApi extends BaseApi {
  override updateProfile(body: PlainObject) {
    return fetchWithMethod.put('/user/profile', {body})
  }

  override updateAvatar(body: PlainObject) {
    return fetchWithMethod.put('/user/profile/avatar', {body, headers: {}})
  }

  override updatePassword(body: PlainObject) {
    return fetchWithMethod.put('/user/password', {body})
  }

  override userById() {
    throw new Error('Not implemented')
  }

  override userByLogin(body: PlainObject) {
    return fetchWithMethod.post('/user/search', {body})
  }
}

export const userApi = new UserApi()
