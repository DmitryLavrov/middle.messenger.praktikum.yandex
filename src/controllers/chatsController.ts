import {PlainObject} from '../core/types'
import {store} from '../services/store/store'
import {handleStatus, returnError} from './helpersController'
import {chatApi} from '../api/chatsApi'

export class ChatsController {
  getChats(urlParams: PlainObject) {
    return chatApi.getChats(urlParams)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('chats', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  createChat(body: PlainObject) {
    return chatApi.createChat(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('chats', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  uploadChatAvatar(body: PlainObject) {
    return chatApi.uploadChatAvatar(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('chats', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  deleteChat(body: PlainObject) {
    return chatApi.deleteChat(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('chats', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  addUsersToChat(body: PlainObject) {
    return chatApi.addUsersToChat(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('chats', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  getUsersByChatId(chatId: number) {
    return chatApi.getUsersByChatId(chatId, {offset: 0, limit: 10})
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('currentChat', {
          chatId,
          users: response
        })
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  deleteUsersFromChat(body: PlainObject) {
    return chatApi.deleteUsersFromChat(body)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => {
        store.setState('currentChat.users', response)
        return {status}
      })
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }

  getToken(chatId: number) {
    return chatApi.getToken(chatId)
      .then(({status, response}) => handleStatus({status, response}))
      .then(({status, response}) => ({status, response}))
      .catch(({status, errorMessage}) => returnError({status, errorMessage}))
  }
}

export const chatsController = new ChatsController()
