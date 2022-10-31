interface Options {
  timeout?: number
  method?: string
  headers?: Record<string, string>
  data?: Record<string, any>
  params?: Record<string, any>
  retries?: number
}

type HTTPMethod = (
  url: string,
  options?: Options
) => Promise<unknown>

enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

// =====================================================================
// queryStringify
// На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
// На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
function queryStringify(data: Object = {}) {
  const pairs = Object.entries(data).map(
    ([key, val]) => (`${key}=${val}`)
  )
  return pairs.length ? `?${pairs.join('&')}` : ''
}

// =====================================================================
// class HTTPTransport
export class HTTPTransport {
  get:HTTPMethod = (url, options = {}) => (
    this.request(url, {...options, method: METHODS.GET}, options.timeout)
  )
  put:HTTPMethod = (url, options = {}) => (
    this.request(url, {...options, method: METHODS.PUT}, options.timeout)
  )
  post:HTTPMethod = (url, options = {}) => (
    this.request(url, {...options, method: METHODS.POST}, options.timeout)
  )
  delete:HTTPMethod = (url, options = {}) => (
    this.request(url, {...options, method: METHODS.DELETE}, options.timeout)
  )

  private request = (url: string, options: Options = {}, timeout = 5000) => {
    const {headers = {}, method = METHODS.GET, data} = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const isGet = (method === METHODS.GET)

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url
      )

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => resolve(xhr)

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}
