import {Listeners, BlockProp} from './types'

export class EventBus {
  private readonly listeners: Listeners

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw {errorMessage: `Event not found: ${event}`}
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    )
  }

  emit(event: string, ...args: BlockProp[]) {
    if (!this.listeners[event]) {
      throw {errorMessage: `Event not found: ${event}`}
    }
    this.listeners[event].forEach((listener) => listener(...args))
  }
}
