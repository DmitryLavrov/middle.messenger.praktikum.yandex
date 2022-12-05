import {BaseApi} from './baseApi'
import {fetchWithMethod} from '../services/http/httpTransport'
import {Indexed} from '../core/types'

class ChatsApi extends BaseApi {
  getChats(urlParams: Indexed) {
    return fetchWithMethod.get('/chats', {urlParams})
  }

  createChat(body: Indexed) {
    return fetchWithMethod.post('/chats', {body})
  }

  deleteChat(body: Indexed) {
    return fetchWithMethod.delete('/chats', {body})
  }

  getUsersByChatId(chatId: number, urlParams: Indexed) {
    return fetchWithMethod.get(`/chats/${chatId}/users`, {urlParams})
  }

  getUnreadCount(body: Indexed) {
    return fetchWithMethod.get(`/chats/new/${body.id}`, {body})
  }

  uploadChatAvatar(body: Indexed) {
    return fetchWithMethod.put('/chats/avatar', {body, headers: {}})
  }

  addUsersToChat(body: Indexed) {
    return fetchWithMethod.put('/chats/users', {body})
  }

  deleteUsersFromChat(body: Indexed) {
    return fetchWithMethod.delete('/chats/users', {body})
  }

  getToken(chatId: number) {
    return fetchWithMethod.post(`/chats/token/${chatId}`)
  }
}

export const chatApi = new ChatsApi()
