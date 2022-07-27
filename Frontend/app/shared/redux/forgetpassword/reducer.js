/*
 *
 * ForgetPassword reducer
 *
 */
import produce from 'immer'
import constants from './constants'
import { openNotificationWithIcon } from '../../utils/notification.helper'

export const initialState = {
  data: { emailSuccessSend: false },
  local: {
    loading: { forgetPasswordLoading: false },
    errors: { forgetPasswordError: null },
  },
}

/* eslint-disable default-case, no-param-reassign */
const forgetPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.CLEAR_ERRORS:
        draft.local.errors = initialState.local.errors
        break
      /**
       * FORGET PASSWORD
       */
      case constants.FORGET_PASSWORD.request:
        draft.local.loading.forgetPasswordLoading = true
        break
      case constants.FORGET_PASSWORD.success:
        draft.local.loading.forgetPasswordLoading = false
        draft.data.emailSuccessSend = true
        break
      case constants.FORGET_PASSWORD.failure:
        draft.local.loading.forgetPasswordLoading = false
        // openNotificationWithIcon('error', action.message)
        break

      /**
       * RESET PASSWORD
       */
      case constants.RESET_PASSWORD.request:
        draft.local.loading.resetPasswordLoading = true
        break
      case constants.RESET_PASSWORD.success:
        draft.local.loading.resetPasswordLoading = false
        draft.data.resetMessageSuccess = true
        break
      case constants.RESET_PASSWORD.failure:
        draft.local.loading.resetPasswordLoading = false
        // openNotificationWithIcon('error', action.message)
        break
    }
  })

export default forgetPasswordReducer
