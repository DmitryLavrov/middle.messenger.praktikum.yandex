import {render as renderChatPage} from '../../layout/chatPage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'
import '../../styles/main.scss'

document.querySelector('#root').innerHTML = renderChatPage() + renderTestLinks()
