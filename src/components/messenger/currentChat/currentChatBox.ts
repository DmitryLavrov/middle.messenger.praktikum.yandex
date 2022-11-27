import tmpl from './currentChatBox/currentChatBox.hbs'
import {Block} from '../../../core/block'
import {BlockProps} from '../../../core/types'
import './currentChatBox/currentChatBox.scss'
import {withCurrentChat} from '../../../services/store/storeHoc'
import {currentChatProps} from './currentChatProps'
import {CurrentChatBoxProps} from './currentChatBox/currentChatBoxTypes'
import {isEqual} from '../../../utils/helpers'

class CurrentChatBox extends Block<CurrentChatBoxProps> {
  constructor(props: CurrentChatBoxProps) {
    super({...props, tagName: 'div'})
  }

  componentDidMount(): void {
    // this.setProps({
    //   ...this.props,
    //   currentChat: {
    //     chatId: store.getState().currentChat?.chatId ?? null,
    //     userList: store.getState().currentChat?.userList ?? null
    //   }
    // })
    // this.eventBus.emit(Block.EVENTS.FLOW_RENDER)

    // const chatId = store.getState().currentChat?.chatId
    // const userId = store.getState().user?.id

    //--------------------------
    // store.setState('currentChat', {
    //     chatId: null,
    //     userList: null
    // })
    // console.log('chatId', chatId)
    // console.log('userId', userId)
    // console.log('store.getState()', store.getState())
    // console.log('this.props', this.props)
    //--------------------------

    // if (chatId && userId) {
    //   chatsController.getToken(chatId)
    //     .then(({status, errorMessage, response}: ControllerResponse) => {
    //       if (status === 200) {
    //         socketController.start(userId, chatId, response?.token)
    //         chatsController.getUsersByChatId(chatId)
    //           .then(({status, errorMessage}: ControllerResponse) => {
    //             if (status === 200) {
    //               // router.go('/messenger')
    //               this.setProps(currentChatProps())
    //               this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    //             } else {
    //               showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
    //             }
    //           })
    //       } else {
    //         showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
    //       }
    //     })
    // } else {
    // }
    this.setProps(currentChatProps(this.props.currentChat))
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps): boolean {
    if (!isEqual(oldProps, newProps)) {
      //--------------------------
      // if ((oldProps.currentChat as CurrentChat)?.chatId !== (newProps.currentChat as CurrentChat)?.chatId) {
      //   const chatId = store.getState().currentChat?.chatId
      //   const userId = store.getState().user?.id
      //
      //   if (chatId && userId) {
      //     chatsController.getToken(chatId)
      //       .then(({status, errorMessage, response}: ControllerResponse) => {
      //         if (status === 200) {
      //           socketController.start(userId, chatId, response?.token)
      //           chatsController.getUsersByChatId(chatId)
      //             .then(({status, errorMessage}: ControllerResponse) => {
      //               if (status === 200) {
      //                 // router.go('/messenger')
      //                 // this.setProps(currentChatProps())
      //               } else {
      //                 showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
      //               }
      //             })
      //         } else {
      //           showErrorElement(null, errorMessage ?? 'We\'ve got an error!', 5000)
      //         }
      //       })
      //   }
      // }

      this.setProps(newProps)
      this.setProps(currentChatProps(this.props.currentChat))
      return true
    }
    return false
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}

export const CurrentChatBoxWithCurrentChat = withCurrentChat(CurrentChatBox)
