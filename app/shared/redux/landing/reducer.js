/*
 *
 * Landing reducer
 *
 */
import produce from 'immer'
import constants from './constants'

export const initialState = {
  data: {
    posts: [],
  },
  local: {
    loading: {},
    errors: {},
  },
}

/* eslint-disable default-case, no-param-reassign */
const landingReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.CLEAR_ERRORS:
        draft.local.errors = initialState.local.errors
        break
      case constants.DEFAULT_ACTION.request:
        break
      case constants.DEFAULT_ACTION.success:
        break
      case constants.DEFAULT_ACTION.failure:
        break
    }
  })

export default landingReducer
