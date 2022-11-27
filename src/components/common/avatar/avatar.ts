import tmpl from './avatar.hbs'
import {Block} from '../../../core/block'
import './avatar.scss'
import {AvatarProps} from './avatarTypes'

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({...props, tagName: 'img'})
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props)
  }
}
