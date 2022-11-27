import {EventBus} from '../../core/eventBus'
import {set} from '../../utils/helpers'
import {State} from './storeTypes'

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: State = {authorized: false}

  getState() {
    return this.state
  }

  setState(path: string, value: unknown) {
    set(this.state, path, value)

    // Emit event 'updated'
    this.emit(StoreEvents.Updated)
  }
}

export const store = new Store()
