import {ErrorPage} from './errorPage'
import {Link} from '../../components/common/link/link'
import {render} from '../../utils/helpers'
import '../../styles/main.scss'

const errorPage = new ErrorPage({
  title: '500',
  content: 'Something happened',
  childLink: new Link({
    attrClass: 'link',
    attrHref: '/',
    childLabel: 'Back to chat'
  })
})

render('#root', errorPage)
