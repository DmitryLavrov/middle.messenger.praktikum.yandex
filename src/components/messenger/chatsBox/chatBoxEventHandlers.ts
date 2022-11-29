import {store} from '../../../services/store/store'
import {chatsController} from '../../../controllers/chatsController'
import {ResponseController} from '../../../core/types'
import {showErrorElement} from '../../../services/errorHandlers'
import {socketController} from '../../../controllers/socketController'

export const selectChat = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLElement
  const chatIdStr = element.dataset.chatid
  const userId = store.getState().user?.id

  if (!chatIdStr || !userId) {
    showErrorElement(null, 'Unsupported instruction!', 5000)
    return
  }

  const chatId = parseInt(chatIdStr)
  try {
    await chatsController.getUsersByChatId(chatId)
    const {response}: ResponseController = await chatsController.getToken(chatId)
    await socketController.start(userId, chatId, response?.token as string)
  } catch ({status, errorMessage}) {
    showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
  }
}
