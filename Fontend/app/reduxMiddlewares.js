import { push } from 'connected-react-router'
import routes from 'shared/routes'
import { openNotificationWithIcon } from './shared/utils/notification.helper'

const isRequest = action => action.type.slice(-'REQUEST'.length) === 'REQUEST'
const isSuccess = action => action.type.slice(-'SUCCESS'.length) === 'SUCCESS'
const isFailure = action => action.type.slice(-'FAILURE'.length) === 'FAILURE'
const isGet = e => e.config.method === 'GET'

const extractRoot = type => {
  const splitType = type.split('/')
  return `app/${splitType[1]}`
}

const error400And424Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    openNotificationWithIcon('error', action.e.response.data.message)
    next({ ...action, message: action.e.response.data.message })
    return
  }
  next(action)
}

const error500OrMoreHandling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (typeof e === 'object') {
      if (isGet(action.e)) {
        store.dispatch(push(routes.NO_DATA.path))
        next(action)
      } else {
        next({ ...action, message: action.e.response.data.message })
        return
      }
    } else {
      store.dispatch(push(routes.ERROR_PAGE.path))
    }
  }
  next(action)
}

const error403Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    if (
      action.e.response &&
      action.e.response.status &&
      action.e.response.status === 403
    ) {
      if (isGet(action.e)) {
        store.dispatch(push(routes.FOUR_O_THREE.path))
        next(action)
      } else {
        next({ ...action, message: action.e.response.data.message })
        return
      }
    }
  }
  next(action)
}
const error401Handling = (store, next, action) => {
  if (action.e && isFailure(action)) {
    openNotificationWithIcon('error', action.e.response.data.message)
    store.dispatch({
      type: 'app/Profile/LOGOUT_REQUEST',
    })
    localStorage.clear()
    // store.dispatch(push(routes.LOGIN.path))
  }
  next(action)
}

const clearErrors = store => next => action => {
  if (isRequest(action) || isSuccess(action))
    store.dispatch({
      type: `${extractRoot(action.type)}/CLEAR_ERRORS`,
    })
  next(action)
}

const errorsHandling = store => next => action => {
  if (action.e && action.e.response && isFailure(action)) {
    // eslint-disable-next-line default-case
    switch (action.e.response.status) {
      case 401:
        error401Handling(store, next, action)
        break
      case 424:
      case 400:
      case 404:
        error400And424Handling(store, next, action)
        break

      case 403:
        error403Handling(store, next, action)

        break
    }
    if (
      action.e.response &&
      action.e.response.status &&
      action.e.response.status &&
      action.e.response.status >= 500
    ) {
      error500OrMoreHandling(store, next, action)
    }
  } else if (isFailure(action)) {
    error500OrMoreHandling(store, next, action)
  } else {
    next(action)
  }
}

export default [errorsHandling, clearErrors]
