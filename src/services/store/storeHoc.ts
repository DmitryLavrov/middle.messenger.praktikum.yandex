import {BlockProps, Indexed} from '../../core/types'
import {store, StoreEvents} from './store'
import {deepClone, isEqual} from '../../utils/helpers'
import {Block} from '../../core/block'
import {State} from './storeTypes'

function connect(mapStateToProps: (state: State) => Indexed) {
  return function (Component: typeof Block<BlockProps>) {
    return class extends Component {
      constructor(props: BlockProps) {
        let state = mapStateToProps(store.getState())
        const newProps = {...props, ...state}
        super(newProps as BlockProps)

        // Subscribe to event 'updated'
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState())

          if (!isEqual(state, newState)) {
            // if the state of the component has changed, update props (which will cause the render)
            const clonedState = deepClone(newState)

            this.setProps(clonedState as BlockProps)
            state = clonedState as Indexed
          }
        })
      }
    }
  }
}

export const withUser = connect(state => ({user: state.user}))
export const withChats = connect(state => ({chats: state.chats}))
export const withCurrentChat = connect(state => ({currentChat: state.currentChat}))
export const withMessages = connect(state => ({messages: state.messages}))
