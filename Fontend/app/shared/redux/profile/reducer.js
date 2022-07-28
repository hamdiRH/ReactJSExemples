/* eslint-disable no-case-declarations */
/*
 *
 * Profile reducer
 *
 */
import produce from 'immer'
import { hasToken } from 'shared/utils/access-token'
import constants from './constants'

const initialLocal = {
  isSignedIn: hasToken(),

  loading: {
    globalLoading: false,
    fetchProfileLoading: false,
    logoutLoading: false,
    refreshTokenLoading: false,
  },
  errors: { fetchProfileErrors: null },
}

export const initialState = {
  local: initialLocal,
  data: { userInfo: {} },
  URLS: {},
}

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.CLEAR_ERRORS:
        draft.local.errors = initialState.local.errors
        break
      /**
       *  GET SETTING
       */
      case constants.GET_SETTINGS.request:
        draft.local.loading.globalLoading = true
        break
      case constants.GET_SETTINGS.success:
        window.baseApiUrl = action.data.GATEWAY_URL
        window.X_IDENTITY_URL = action.data.IDENTITY_URL
        draft.URLS = action.data
        draft.local.loading.globalLoading = false
        break
      case constants.GET_SETTINGS.failure:
        draft.local.loading.globalLoading = false
        break

      /**
       * GET PROFILE
       */
      case constants.GET_PROFILE.request:
        draft.local.loading.fetchProfileLoading = true
        draft.local.loading.globalLoading = true
        break
      case constants.GET_PROFILE.success:
        draft.local.loading.fetchProfileLoading = false
        draft.local.loading.globalLoading = false
        draft.data.userInfo = action.data
        break
      case constants.GET_PROFILE.failure:
        draft.local.loading.fetchProfileLoading = false
        draft.local.loading.globalLoading = false
        draft.local.loading.refreshTokenLoading = false
        if (action.e.response) {
          draft.local.errors.fetchProfileErrors = action.message
          if (action.e.response.status === 401) {
            localStorage.clear()
            window.location = '/'
          }
        }
        break

      /**
       * REFRESH TOKEN
       */
      case constants.REFRESH_TOKEN.request:
        draft.local.loading.refreshTokenLoading = true
        break
      case constants.REFRESH_TOKEN.success:
        draft.local.loading.refreshTokenLoading = false
        localStorage.setItem('token', action.data.accessToken.token)
        localStorage.setItem('expires', action.data.accessToken.expires)
        window.location = '/'
        break
      case constants.REFRESH_TOKEN.failure:
        draft.local.loading.refreshTokenLoading = false
        localStorage.clear()
        window.location = '/'
        break

      /**
       * LOGOUT
       */
      case constants.LOGOUT.request:
        draft.local.loading.logoutLoading = true
        break
      case constants.LOGOUT.success:
        draft.local.loading.logoutLoading = false
        localStorage.clear()
        break
      case constants.LOGOUT.failure:
        draft.local.loading.logoutLoading = false
        localStorage.clear()
        break
    }
  })

export default profileReducer
