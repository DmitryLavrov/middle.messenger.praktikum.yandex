import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/httpTransport'
import {PlainObject} from '../core/types'

class AuthApi extends BaseApi {
  override register(body: PlainObject) {
    return fetchWithMethod.post('/auth/signup', {body})
  }

  override login(body: PlainObject) {
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
