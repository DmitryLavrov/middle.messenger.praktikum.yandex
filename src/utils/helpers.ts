import {Block} from '../core/block'
import {BlockProps, Indexed} from '../core/types'

// =====================================================================
// render(query, block)
export function render(query: string, block: Block<BlockProps> | null) {
  const root = document.querySelector(query)

  if (!root) {
    return null
  }

  if (!block) {
    return null
  }

  root.appendChild(block.element)
  block.dispatchComponentDidMount()
  return root
}

// =====================================================================
// isEqual(lhs, rhs)
export function isEqual(lhs: any, rhs: any) {
  if (typeof lhs === 'object' && typeof rhs === 'object') {
    return JSON.stringify(lhs) === JSON.stringify(rhs)
  }

  return lhs === rhs
}

// =====================================================================
// queryStringify(data)
// На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
// На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
export function queryStringify(data: Indexed) {
  const pairs = Object.entries(data).map(
    ([key, val]) => (`${key}=${val}`)
  )
  return pairs.length ? `?${pairs.join('&')}` : ''
}

// =====================================================================
// merge(lhs, rhs)
function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue
    }

    if (typeof rhs[p] === 'object' && !Array.isArray(rhs[p])) {
      if (lhs[p]) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed)
      } else {
        lhs[p] = rhs[p]
      }
    } else {
      lhs[p] = rhs[p]
    }
  }
  return lhs
}

// =====================================================================
// set(object, path, value)
export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object') {
    return object
  }

  const lhs = path
    .split('.')
    .reduceRight((acc, i) => ({[i]: acc}), value) as Indexed

  if (typeof lhs !== 'object') {
    return object
  }

  return merge(object as Indexed, lhs)
}

// =====================================================================
// deepClone(any)
export function deepClone(value: any): any {
  if (typeof value === 'object') {
    return JSON.parse(JSON.stringify(value))
  }
  return value
}

// =====================================================================
// timeToRenderString(timeStr)
export function timeToRenderString(timeStr: string | undefined): string {
  if (timeStr === undefined) {
    return ''
  }
  const time = new Date(timeStr)
  const interval = Number(Date.now()) - Number(time)
  const diffMinutes = interval / 1000 / 60
  if (diffMinutes < 1) return `1${String.fromCharCode(160)}minute ago`
  if (diffMinutes < 5) return `5${String.fromCharCode(160)}minutes ago`
  if (diffMinutes < 10) return `10${String.fromCharCode(160)}minutes ago`
  if (diffMinutes < 30) return `30${String.fromCharCode(160)}minutes ago`

  const diffDays = interval / 1000 / 60 / 60 / 24

  const minutes = (`0${time.getMinutes()}`).slice(-2)
  const hours = (`0${time.getHours()}`).slice(-2)
  const days = (`0${time.getDate()}`).slice(-2)
  const months = (`0${time.getMonth() + 1}`).slice(-2)
  const years = time.getFullYear()

  if (diffDays < 1) return `${hours}:${minutes}`
  if (diffDays < 365) return `${days}.${months}`
  return `${days}.${months}.${years}`
}
