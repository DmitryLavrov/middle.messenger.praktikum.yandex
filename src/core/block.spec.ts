import {JSDOM} from 'jsdom'
import {expect} from 'chai'
import {Block} from './block'

type TestProps = {
  test?: string
  id?: string
}

class TestBlock extends Block<TestProps> {
  constructor(props: TestProps) {
    super({...props})
  }

  getProps() {
    return this.props
  }
}

describe('Block', () => {
  beforeEach(() => {
    const {window} = new JSDOM('', {url: 'http://localhost'});
    (global as any).document = window.document
  })

  describe('setProps', () => {
    it('should update props', () => {
      const testBlock = new TestBlock({test: 'Start'})
      testBlock.setProps({test: 'Finish'})
      expect(testBlock.getProps().test).to.eq('Finish')
    })
  })

  describe('id', () => {
    it('should be generated', () => {
      const testBlock = new TestBlock({})
      expect(typeof testBlock.getProps().id).to.eq('string')
    })
  })
})
