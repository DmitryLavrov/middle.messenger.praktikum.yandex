import tmpl from './fieldBox.hbs'
import {Block} from '../../../core/block'
import './fieldBox.scss'
import {FieldBoxProps} from '../formTypes'

export class FieldBox extends Block<FieldBoxProps> {
  constructor(props: FieldBoxProps) {
    super({...props, tagName: 'div'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
