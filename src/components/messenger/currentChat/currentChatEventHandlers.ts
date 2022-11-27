import {ControllerResponse} from '../../../core/types'
import {router} from '../../../services/router'
import {showErrorElement} from '../../../services/errorHandlers'
import {chatsController} from '../../../controllers/chatsController'
import {store} from '../../../services/store/store'
import {userController} from '../../../controllers/userController'
import {User} from '../../../services/store/storeTypes'

export const changeChatAvatar = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (chatId) {
    const body = new FormData(element)
    body.append('chatId', chatId.toString())

    chatsController.uploadChatAvatar(body)
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          router.go('/messenger')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  } else {
    showErrorElement(errorElement, 'Select the chat', 5000)
  }
}

export const deleteChat = (event: Event): void => {
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (chatId) {
    chatsController.deleteChat({chatId})
      .then(({status, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          router.go('/messenger')
        } else {
          showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
        }
      })
  } else {
    showErrorElement(errorElement, 'Select the chat', 5000)
  }
}

export const submitAddUserToChat = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (chatId) {
    userController.userByLogin({login: element.login.value})
      .then(({status, response, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          if (response?.length > 0) {
            chatsController.addUsersToChat({users: [response?.[0].id], chatId})
              .then(({status, errorMessage}: ControllerResponse) => {
                if (status === 200) {
                  chatsController.getUsersByChatId(chatId)
                    .then(({status, errorMessage}: ControllerResponse) => {
                      if (status === 200) {
                        router.go('/messenger')
                      } else {
                        showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
                      }
                    })
                } else {
                  showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
                }
              })
          } else {
            showErrorElement(errorElement, errorMessage ?? 'Can\'t find user', 5000)
          }
        } else {
          showErrorElement(errorElement, errorMessage ?? 'Chat should be selected', 5000)
        }
      })
  }
}

export const submitDeleteUserFromChat = (event: Event): void => {
  event.preventDefault()
  const element = event.target as HTMLFormElement
  const errorElement = (element.parentElement?.parentElement?.parentElement?.querySelector('.form-error-message')) as HTMLElement

  const chatId = store.getState().currentChat?.chatId ?? null

  if (chatId) {
    userController.userByLogin({login: element.login.value})
      .then(({status, response, errorMessage}: ControllerResponse) => {
        if (status === 200) {
          if (response?.length > 0) {
            chatsController.deleteUsersFromChat({users: response?.map((user : User) => user.id), chatId})
              .then(({status, errorMessage}: ControllerResponse) => {
                if (status === 200) {
                  chatsController.getUsersByChatId(chatId)
                    .then(({status, errorMessage}: ControllerResponse) => {
                      if (status === 200) {
                        router.go('/messenger')
                      } else {
                        showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
                      }
                    })
                } else {
                  showErrorElement(errorElement, errorMessage ?? 'We\'ve got an error!', 5000)
                }
              })
          } else {
            showErrorElement(errorElement, errorMessage ?? 'Can\'t find user', 5000)
          }
        } else {
          showErrorElement(errorElement, errorMessage ?? 'Chat should be selected', 5000)
        }
      })
  }
}
