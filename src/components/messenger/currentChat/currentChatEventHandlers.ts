import {ResponseController} from '../../../core/types'
import {router} from '../../../services/router'
import {showErrorElement} from '../../../services/errorHandlers'
import {chatsController} from '../../../controllers/chatsController'
import {store} from '../../../services/store/store'
import {userController} from '../../../controllers/userController'
import {User} from '../../../services/store/storeTypes'

export const changeChatAvatar = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (!chatId) {
    showErrorElement(errorElement, 'Chat should be selected', 5000)
    return
  }

  const body = new FormData(element)
  body.append('chatId', chatId.toString())

  try {
    await chatsController.uploadChatAvatar(body)
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const deleteChat = async (event: Event) => {
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (!chatId) {
    showErrorElement(errorElement, 'Chat should be selected', 5000)
    return
  }

  try {
    await chatsController.deleteChat({chatId})
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const submitAddUserToChat = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (!chatId) {
    showErrorElement(errorElement, 'Chat should be selected', 5000)
    return
  }

  try {
    const {response}: ResponseController = await userController.userByLogin({login: element.login.value})
    if (!(Array.isArray(response) && response?.length > 0)) {
      throw {status: 404, errorMessage: 'Can\'t find user'}
    }
    await chatsController.addUsersToChat({users: [response?.[0].id], chatId})
    await chatsController.getUsersByChatId(chatId)
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}

export const submitDeleteUserFromChat = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (!chatId) {
    showErrorElement(errorElement, 'Chat should be selected', 5000)
    return
  }

  try {
    const {response}: ResponseController = await userController.userByLogin({login: element.login.value})
    if (!(Array.isArray(response) && response?.length > 0)) {
      throw {status: 404, errorMessage: 'Can\'t find user'}
    }
    await chatsController.deleteUsersFromChat({users: response?.map((user: User) => user.id), chatId})
    await chatsController.getUsersByChatId(chatId)
    router.go('/messenger')
  } catch ({status, errorMessage}) {
    showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}
