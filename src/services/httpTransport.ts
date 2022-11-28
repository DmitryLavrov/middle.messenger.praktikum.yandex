import {queryStringify} from '../utils/helpers'
import {RequestOptions, ResponseController} from '../core/types'

type HttpMethod = (
  url: string,
  options?: RequestOptions
) => Promise<ResponseController>

enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

const BASE_URL: string = 'https://ya-praktikum.tech/api/v2'

// =====================================================================
// class HTTPTransport
export class HttpTransport {
  private readonly _baseUrl

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl
  }

  get: HttpMethod = (url, options) => this.request(url, {...options, method: METHODS.GET})
  put: HttpMethod = (url, options) => this.request(url, {...options, method: METHODS.PUT})
  post: HttpMethod = (url, options) => this.request(url, {...options, method: METHODS.POST})
  delete: HttpMethod = (url, options) => this.request(url, {...options, method: METHODS.DELETE})

  private request = (url: string, options: RequestOptions = {}) => {
    const {
      headers = {'content-type': 'application/json'},
      method = METHODS.GET,
      urlParams,
      body,
      credentials = true,
      timeout = 5000
    } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const isGet = (method === METHODS.GET)

      xhr.open(
        method,
        isGet && !!urlParams
          ? `${this._baseUrl}${url}${queryStringify(urlParams)}`
          : `${this._baseUrl}${url}`
      )

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => resolve(xhr)

      xhr.responseType = 'json'
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (credentials) {
        xhr.withCredentials = true
      }

      if (isGet && !body) {
        xhr.send()
      } else if (headers['content-type'] === 'application/json') {
        xhr.send(JSON.stringify(body))
      } else {
        xhr.send(body as XMLHttpRequestBodyInit)
      }
    }) as Promise<ResponseController>
  }
}

export const fetchWithMethod = new HttpTransport(BASE_URL)
