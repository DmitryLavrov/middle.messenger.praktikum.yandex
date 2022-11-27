import {Block} from '../core/block'
import {AnyObject, BlockProps, Indexed} from '../core/types'

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
// Compare objects
// function isPlainObject(value: unknown): value is PlainObject {
//   return typeof value === 'object'
//     && value !== null
//     && value.constructor === Object
//     && Object.prototype.toString.call(value) === '[object Object]'
// }
//
// function isArray(value: unknown): value is [] {
//   return Array.isArray(value)
// }
//
// function isArrayOrObject(value: unknown): value is [] | PlainObject {
//   return isPlainObject(value) || isArray(value)
// }
//
// export function isEqual(lhs: PlainObject, rhs: PlainObject) {
//   if (lhs === undefined && rhs === undefined) {
//     return true
//   }
//
//   if (lhs === null && rhs === null) {
//     return true
//   }
//
//   if (Object.keys(lhs).length !== Object.keys(rhs).length) {
//     return false
//   }
//
//   for (const [key, value] of Object.entries(lhs)) {
//     const rightValue = rhs[key]
//     if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
//       if (isEqual(value, rightValue)) {
//         continue
//       }
//       return false
//     }
//
//     if (value !== rightValue) {
//       return false
//     }
//   }
//
//   return true
// }

// export function isEqual2(lhs: any, rhs: any) {
//   if (lhs === undefined && rhs === undefined) {
//     return true
//   }
//
//   if (lhs === null && rhs === null) {
//     return true
//   }
//
//   if ((typeof lhs === 'string' && typeof rhs === 'string') ||
//     (typeof lhs === 'number' && typeof rhs === 'number') ||
//     (typeof lhs === 'boolean' && typeof rhs === 'boolean')) {
//     return lhs === lhs
//   }
//
//   if (typeof lhs === 'object' && typeof rhs === 'object') {
//     return JSON.stringify(lhs) === JSON.stringify(rhs)
//   }
//
//   return false
// }

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
export function queryStringify(data: AnyObject) {
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
// deepClone(object)
// export function deepClone(obj: any, hash = new WeakMap()):any {
//   if (Object(obj) !== obj) return obj; // primitives
//   if (hash.has(obj)) return hash.get(obj); // cyclic reference
//   const result = obj instanceof Set ? new Set(obj) // See note about this!
//     : obj instanceof Map ? new Map(Array.from(obj, ([key, val]) =>
//         [key, deepClone(val, hash)]))
//       : obj instanceof Date ? new Date(obj)
//         // : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
//           // ... add here any specific treatment for other classes ...
//           // and finally a catch-all:
//           // : obj.constructor ? new obj.constructor()
//             : Object.create(null);
//   hash.set(obj, result);
//   return Object.assign(result, ...Object.keys(obj).map(
//     key => ({ [key]: deepClone(obj[key], hash) }) ));
// }
// export function deepClone<T extends object = object>(obj: T) {
//   return (function _cloneDeep(item: T): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
//     // Handle:
//     // * null
//     // * undefined
//     // * boolean
//     // * number
//     // * string
//     // * symbol
//     // * function
//     if (item === null || typeof item !== 'object') {
//       return item
//     }
//
//     // Handle:
//     // * Date
//     if (item instanceof Date) {
//       return new Date(item.valueOf())
//     }
//
//     // Handle:
//     // * Array
//     if (item instanceof Array) {
//       let copy = []
//
//       item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])))
//
//       return copy
//     }
//
//     // Handle:
//     // * Set
//     if (item instanceof Set) {
//       let copy = new Set()
//
//       item.forEach(v => copy.add(_cloneDeep(v)))
//
//       return copy
//     }
//
//     // Handle:
//     // * Map
//     if (item instanceof Map) {
//       let copy = new Map()
//
//       item.forEach((v, k) => copy.set(k, _cloneDeep(v)))
//
//       return copy
//     }
//
//     // Handle:
//     // * Object
//     if (item instanceof Object) {
//       let copy: object = {}
//
//       // Handle:
//       // * Object.symbol
//       Object.getOwnPropertySymbols(item).forEach(s => (copy[s] = _cloneDeep(item[s])))
//
//       // Handle:
//       // * Object.name (other)
//       Object.keys(item).forEach(k => (copy[k] = _cloneDeep(item[k])))
//
//       return copy
//     }
//
//     throw new Error(`Unable to copy object: ${item}`)
//   })(obj)
// }

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
  // const startNum = typeof start === 'string' ? Number(start) : start
  // const interval = end - startNum
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

//
