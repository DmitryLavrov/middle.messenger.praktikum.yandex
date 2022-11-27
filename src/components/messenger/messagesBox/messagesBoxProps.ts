import userAvatar from 'bundle-text:../../../images/user.svg'
import {Button} from '../../common/button/button'
import {Avatar} from '../../common/avatar/avatar'
import {timeToRenderString} from '../../../utils/helpers'
import {SendBox} from './sendBox/sendBox'
import {SendForm} from './sendForm/sendForm'
import {messageBlur, messageFocus} from '../../../services/eventHandlers'
import {Input} from '../../form/input/input'
import {Messages} from '../../../services/store/storeTypes'
import {MessagesBoxProps} from './messagesBoxTypes'
import {Message} from './message/message'
import {sendMessage} from './messagesBoxEventHandlers'
import {store} from '../../../services/store/store'

export const messagesBoxProps = (messages?: Messages): MessagesBoxProps => {
  const chatId = store.getState().currentChat?.chatId ?? null

  return {
    attrClass: 'messages-box',
    childMessageBlocks: messages ? messages.map(message => new Message({
      dataMine: message.isMine,
      childAvatar: message.isMine ? undefined : message.avatar ? new Avatar({
        attrClass: 'img-chat-avatar',
        attrSrc: `https://ya-praktikum.tech/api/v2/resources${message.avatar}`,
        attrAlt: 'Chat avatar'
      }) : userAvatar,
      displayName: message.isMine ? undefined : message.displayName,
      content: message.content,
      time: timeToRenderString(message.time),
      attrClass: 'message'
    }))
      : [],
    childSendBox: chatId ? new SendBox({
      attrClass: 'send-box',
      childButton: new Button({
        childLabel: 'Upload',
        attrType: 'button',
        attrClass: 'button-icon'
      }),
      childForm: new SendForm({
        attrClass: 'send-form',
        onSubmit: sendMessage,
        childInput: new Input({
          attrId: 'message',
          attrName: 'message',
          attrType: 'text',
          attrPlaceholder: 'Type message here',
          onFocus: messageFocus,
          onBlur: messageBlur
        }),
        childButton: new Button({
          childLabel: 'Send',
          attrType: 'submit',
          attrClass: 'button-icon'
        })
      })
    }) : null
  }
}
