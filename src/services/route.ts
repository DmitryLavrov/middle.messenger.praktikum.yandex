import {render} from '../utils/helpers'
import {BlockClass, BlockPage, RouteProps} from '../core/types'

export class Route {
  private _pathname: string
  private _blockClass: BlockClass
  private _block: BlockPage | null
  private _routeProps: RouteProps

  constructor(pathname: string, view: BlockClass, routeProps: RouteProps) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._routeProps = routeProps
  }

  navigate(pathname: string) {
    if (pathname === this._pathname) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({})
      render(this._routeProps.rootQuery, this._block)
      return
    }

    this._block.show()
  }
}
