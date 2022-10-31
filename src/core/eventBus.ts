import {Listeners, Prop} from './types'

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
      throw new Error(`Event not found: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    )
  }

  emit(event: string, ...args: Prop[]) {
    if (!this.listeners[event]) {
      throw new Error(`Event not found: ${event}`)
    }

    this.listeners[event].forEach((listener) => listener(...args))
  }
}
