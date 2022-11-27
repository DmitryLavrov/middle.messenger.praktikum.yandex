import {Route} from './route'
import {BlockClass, RouteProps} from '../core/types'

class Router {
  public routes: Route[]
  public history: History
  private _currentRoute: Route | null
  private readonly _routeProps: RouteProps
  private static __instance: Router

  constructor(props: RouteProps) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._routeProps = props

    Router.__instance = this
  }

  use(pathname: string, block: BlockClass) {
    const route = new Route(pathname, block, this._routeProps)
    this.routes.push(route)
    return this
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      event.preventDefault()
      this._onRoute((event.currentTarget as Window).location.pathname)
    }
    this._onRoute(window.location.pathname)
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname)
    if (!route) {
      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname))
  }
}

export const router = new Router({rootQuery: '#root'})
