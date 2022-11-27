import {store} from '../../../services/store/store'
import {chatsController} from '../../../controllers/chatsController'
import {ControllerResponse} from '../../../core/types'
import {showErrorElement} from '../../../services/errorHandlers'
import {socketController} from '../../../controllers/socketController'

export const selectChat = async (event: Event) => {
  event.preventDefault()
  const element = event.target as HTMLElement
  const chatIdStr = element.dataset.chatid
  const userId = store.getState().user?.id

  if (chatIdStr && userId) {
    const chatId = parseInt(chatIdStr)
    chatsController.getUsersByChatId(chatId)
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          // router.go('/messenger')
        } else {
          showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })

    chatsController.getToken(chatId)
      .then(({status, errorMessage, response}: ControllerResponse) => {
        if (status === 200) {
          socketController.start(userId, chatId, response?.token)
        } else {
          showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  }
}
