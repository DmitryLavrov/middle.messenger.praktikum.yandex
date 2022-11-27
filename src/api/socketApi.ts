import {Callback, CallbackEvent} from './socketApiTypes'

export class SocketApi {
  private readonly _socket: WebSocket
  private _onOpen?: () => void
  private _onClose?: (event: CloseEvent) => void
  private _onMessage?: (event: MessageEvent) => void
  private _onError?: (event: ErrorEvent) => void

  constructor(url: string) {
    this._socket = new WebSocket(url)
  }

  open(callback: Callback): void {
    this._onOpen = () => callback()
    this._socket.addEventListener('open', this._onOpen.bind(this))
  }

  close(successCallback: Callback, errorCallback: Callback): void {
    this._onClose = event => {
      if (event.wasClean) {
        successCallback()
      } else {
        errorCallback()
        console.error(`Code: ${event.code} | Reason: ${event.reason}`)
      }
    }
    this._socket.addEventListener('close', this._onClose.bind(this))
  }

  message(callback: CallbackEvent): void {
    this._onMessage = (event) => {
      if (event.data.startsWith('[') || event.data.startsWith('{')) {
        callback(event)
      } else {
        console.warn(event.data)
      }
    }
    this._socket.addEventListener('message', this._onMessage.bind(this))
  }

  error(errorCallback: CallbackEvent): void {
    this._onError = event => errorCallback(event)
    this._socket.addEventListener('error', this._onError.bind(this))
  }

  ping(): void {
    const pinging = setInterval(() => {
      if (!this._socket || this._socket.readyState !== 1) {
        clearInterval(pinging)
      }
      this._socket.send(JSON.stringify({type: 'ping'}))
      // console.log('wss ping')
    }, 10000)
  }

  removeEvents(): void {
    if (this._onOpen) {
      this._socket.removeEventListener('open', this._onOpen.bind(this))
    }
    if (this._onClose) {
      this._socket.removeEventListener('open', this._onClose.bind(this))
    }
    if (this._onMessage) {
      this._socket.removeEventListener('open', this._onMessage.bind(this))
    }
    if (this._onError) {
      this._socket.removeEventListener('open', this._onError.bind(this))
    }
  }

  getLastMessages() {
    this._socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old'
      })
    )
  }

  sendMessage(message: string) {
    this._socket.send(
      JSON.stringify({
        content: message,
        type: 'message'
      })
    )
  }
}
