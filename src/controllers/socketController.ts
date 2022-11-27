import {SocketApi} from '../api/socketApi'
import {store} from '../services/store/store'
import {Message} from '../services/store/storeTypes'

const SOCKET_URL: string = 'wss://ya-praktikum.tech/ws/chats/'

class SocketController {
  private _socketApi: SocketApi
  private _connected: boolean

  start(userId: number, chatId: number, token: string) {
    if (userId === store.getState().user?.id && chatId === store.getState().currentChat?.chatId) {
      return
    }

    this._socketApi?.removeEvents()

    this._socketApi = new SocketApi(`${SOCKET_URL}${userId}/${chatId}/${token}`)

    this._socketApi.open(this._onOpen.bind(this))
    this._socketApi.close(this._onCloseSuccess.bind(this), this._onCloseError.bind(this))
    this._socketApi.message(this._onMessage.bind(this))
    this._socketApi.error(this._onError.bind(this))
  }

  sendMessage(message: string) {
    if (this._connected) {
      this._socketApi.sendMessage(message)
    }
  }

  private _onOpen() {
    this._connected = true
    this._socketApi.getLastMessages()
    this._socketApi.ping()
    console.log('Connection established')
  }

  private _onCloseSuccess() {
    this._connected = false
    console.log('Connection closed successfully')
  }

  private _onCloseError() {
    this._connected = false
    console.log('Lost connection')
  }

  private _onError(event: ErrorEvent) {
    console.log('Error', event.message)
  }

  private _onMessage(event: MessageEvent) {
    try {
      const data = JSON.parse(event.data)

      if (Array.isArray(data)) {
        const messages = data
          .map((item): Message => {
            const user = store.getState().currentChat?.users?.find(user => user.id === item.user_id)
            return {
              isMine: item.user_id === store.getState().user?.id,
              avatar: user?.avatar,
              displayName: user?.display_name ?? `${user?.first_name ?? ''} ${user?.second_name ?? ''}`,
              content: item.content,
              time: item.time
            }
          })
        store.setState('messages', messages.reverse())
      } else if (data.type === 'message') {
        const messages = store.getState().messages ?? []
        messages.push({
          isMine: true,
          content: data.content,
          time: data.time
        })
        store.setState('messages', messages)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const socketController = new SocketController()
