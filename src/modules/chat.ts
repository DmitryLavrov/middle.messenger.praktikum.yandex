import ChatPage from '../pages/chatPage/chatPage'
import TestLinks from '../components/temporary/testLinks/testLinks'
import {render} from '../utils/renderDOM'
import '../styles/main.scss'
import MessageBox from '../components/messageBox/messageBox'
import Button from '../components/button/button'
import MessageForm from '../components/messageForm/messageForm'
import {formSubmit, messageBlur, messageFocus} from '../services/eventsHandlers'
import Input from '../components/input/input'

const chatPage = new ChatPage({
  messageBox: new MessageBox({
    attrClass: 'message-box',
    button: new Button({
      label: 'Upload',
      attrType: 'button',
      attrClass: 'button-icon'
    }),
    form: new MessageForm({
      attrClass: 'message-form',
      eventSubmit: formSubmit,
      input: new Input({
        attrId: 'message',
        attrName: 'message',
        attrType: 'text',
        attrPlaceholder: 'Type message here',
        eventFocus: messageFocus,
        eventBlur: messageBlur
      }),
      button: new Button({
        label: 'Send',
        attrType: 'submit',
        attrClass: 'button-icon'
      })
    })
  }),
  testLinks: new TestLinks()
})

render('#root', chatPage)
