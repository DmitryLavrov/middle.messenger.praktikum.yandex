import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/httpTransport'
import {PlainObject} from '../core/types'

class ChatsApi extends BaseApi {
  getChats(urlParams: PlainObject) {
    return fetchWithMethod.get('/chats', {urlParams})
  }

  createChat(body: PlainObject) {
    return fetchWithMethod.post('/chats', {body})
  }

  deleteChat(body: PlainObject) {
    return fetchWithMethod.delete('/chats', {body})
  }

  getUsersByChatId(chatId: number, urlParams: PlainObject) {
    return fetchWithMethod.get(`/chats/${chatId}/users`, {urlParams})
  }

  getUnreadCount(body: PlainObject) {
    return fetchWithMethod.get(`/chats/new/${body.id}`, {body})
  }

  uploadChatAvatar(body: PlainObject) {
    return fetchWithMethod.put('/chats/avatar', {body, headers: {}})
  }

  addUsersToChat(body: PlainObject) {
    return fetchWithMethod.put('/chats/users', {body})
  }

  deleteUsersFromChat(body: PlainObject) {
    return fetchWithMethod.delete('/chats/users', {body})
  }

  getToken(chatId: number) {
    return fetchWithMethod.post(`/chats/token/${chatId}`)
  }
}

export const chatApi = new ChatsApi()
