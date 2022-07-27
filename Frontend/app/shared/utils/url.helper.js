import parseUrl from 'url-parse'

export const addOrSetQueryStringParameter = (url, param, value) => {
  const parsedUrl = parseUrl(url, true)
  parsedUrl.query[param] = value
  return parsedUrl.toString()
}

export const removeQueryStringParameter = (url, param) => {
  const parsedUrl = parseUrl(url, true)
  parsedUrl.query[param] = undefined
  return parsedUrl.toString()
}
export const setUrlPath = (url, path) => {
  const parsedUrl = parseUrl(url, true)
  parsedUrl.set('pathname', path)
  return parsedUrl.toString()
}
export const filterUrlParams = (url, params) => {
  const parsedUrl = parseUrl(url, true)
  const query = {}
  Object.keys(parsedUrl.query).map(k => {
    if (!params.find(e => e == k)) query[k] = parsedUrl.query[k]
  })
  parsedUrl.query = query
  return parsedUrl.toString()
}
export const removeParameters = url => {
  const parsedUrl = parseUrl(url, true)
  parsedUrl.query = {}
  return parsedUrl.toString()
}
export const getCurrentQueryStringParameter = param => {
  const parsedUrl = parseUrl(window.location.href, true)
  return parsedUrl.query[param]
}
export const getPath = url => {
  const parsedUrl = parseUrl(url, true)
  return (
    parsedUrl.pathname +
    (parsedUrl.toString().indexOf('?') > 0
      ? `?${parsedUrl.toString().split('?')[1]}`
      : '')
  )
}
