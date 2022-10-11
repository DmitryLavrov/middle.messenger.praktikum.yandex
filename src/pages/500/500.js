import {render as renderErrorPage} from '../../layout/errorPage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'
import '../../styles/main.scss'

document.querySelector('#root').innerHTML = renderErrorPage({
  errorPage: {
    title: '500',
    content: 'Something happened'
  }
}) + renderTestLinks()
