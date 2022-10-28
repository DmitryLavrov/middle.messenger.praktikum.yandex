import ErrorPage from '../pages/errorPage/errorPage'
import TestLinks from '../components/temporary/testLinks/testLinks'
import Link from '../components/link/link'
import {render} from '../utils/renderDOM'
import '../styles/main.scss'

const errorPage = new ErrorPage({
  title: '500',
  content: 'Something happened',
  link: new Link({
    attrClass: 'link',
    attrHref: '/',
    label: 'Back to chat'
  }),
  testLinks: new TestLinks({
    settings: {
      withInternalID: true
    }
  })
})

render('#root', errorPage)
