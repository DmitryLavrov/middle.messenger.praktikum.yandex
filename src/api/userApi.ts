import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/http/httpTransport'
import {Indexed} from '../core/types'

class UserApi extends BaseApi {
  override updateProfile(body: Indexed) {
    return fetchWithMethod.put('/user/profile', {body})
  }

  override updateAvatar(body: Indexed) {
    return fetchWithMethod.put('/user/profile/avatar', {body, headers: {}})
  }

  override updatePassword(body: Indexed) {
    return fetchWithMethod.put('/user/password', {body})
  }

  override userById() {
    throw new Error('Not implemented')
  }

  override userByLogin(body: Indexed) {
    return fetchWithMethod.post('/user/search', {body})
  }
}

export const userApi = new UserApi()
