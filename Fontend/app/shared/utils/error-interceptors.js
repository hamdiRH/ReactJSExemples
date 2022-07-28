import axios from 'axios'
import { setAccessTokenIfDefined } from './access-token'
import {
  addOrSetQueryStringParameter,
  setUrlPath,
  removeParameters,
} from './url.helper'
const registerErrorInterceptors = () => {
  axios.interceptors.request.use(
    config =>
      // Do something before request sent
      config,
    error =>
      // Handle request error
      Promise.reject(error),
  )
  axios.interceptors.response.use(
    response =>
      // Do something with the response data
      response,
    error => {
      // Handle response error
      switch (error.response.status) {
        case 401:
          if (!setAccessTokenIfDefined()) {
            const loginUrlWithoutParams = removeParameters(
              setUrlPath(window.location.href, '/login'),
              ['access_token', 'error', 'data'],
            )
            const loginUrlWithRedirect = addOrSetQueryStringParameter(
              loginUrlWithoutParams,
              'redirectUrl',
              window.location.href,
            )
            window.localStorage.removeItem('token')
            window.location = loginUrlWithRedirect
          }
          break
        default:
          break
      }
      return Promise.reject(error)
    },
  )
}

export const errorsExtraction = errors =>
  Object.keys(errors).reduce(
    (acc, errorKey) => [...acc, ...errors[errorKey]],
    [],
  )

export default registerErrorInterceptors
