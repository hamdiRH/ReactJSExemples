import { isArray, isEmpty } from 'lodash'

export const encode = (queryObj, nesting = '') =>
  `fields=${encodeQuery(queryObj, nesting)}`

export const encodeQuery = (queryObj, nesting = '') =>
  Object.entries(queryObj)
    .map(([key, val]) => {
      if (isArray(val) && isEmpty(val)) {
        return [nesting + key]
      }
      if (typeof val === 'object') {
        if (Object.keys(val).length === 0) {
          return [nesting + key]
        }
        return encodeQuery(val, `${nesting}${key}.`)
      }
      return [nesting + key]
    })
    .join(',')
    .replace(/.0/g, '[]')
