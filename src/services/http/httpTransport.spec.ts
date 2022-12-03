import {expect} from 'chai'
import {HttpTransport} from './httpTransport'

describe('HttpTransport', () => {
  beforeEach(() => {
    global.XMLHttpRequest = require('xhr2')
  })

  describe('url params', () => {
    it('should parse well', async () => {
      const fetchForTest = new HttpTransport('https://jsonplaceholder.typicode.com')
      return fetchForTest.get('/comments', {urlParams: {postId: 1, id: 1}})
        .then((res) => {
          expect((res as any)?._url?.query).to.eq('postId=1&id=1')
        })
    })
  })
})
