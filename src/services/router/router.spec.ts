import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('Router', () => {
  beforeEach(() => {
    const {window} = new JSDOM('', {url: 'http://localhost'});
    (global as any).window = window
  })

  describe('jump to new page', () => {
    it('should change history length', () => {
      window.history.pushState({page: 'login'}, 'Login', '/login')
      window.history.pushState({page: 'register'}, 'Register', '/register')
      expect(window.history.length).to.eq(3)
    })
  })
})
