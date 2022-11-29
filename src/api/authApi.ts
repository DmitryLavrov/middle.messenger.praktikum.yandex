import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/httpTransport'
import {Indexed} from '../core/types'

class AuthApi extends BaseApi {
  override register(body: Indexed) {
    return fetchWithMethod.post('/auth/signup', {body})
  }

  override login(body: Indexed) {
    return fetchWithMethod.post('/auth/signin', {body})
  }

  override logout() {
    return fetchWithMethod.post('/auth/logout')
  }

  override getUserInfo() {
    return fetchWithMethod.get('/auth/user')
  }
}

export const authApi = new AuthApi()
