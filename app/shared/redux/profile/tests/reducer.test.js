import produce from 'immer'
import profileReducer from '../reducer'
import constants from '../constants'
import { generateUrl } from '../urlGenerator'

describe('profileReducer', () => {
  let state
  beforeEach(() => {
    state = {
      loading: true,
      data: {
        roles: [],
        userInfo: {},
      },
      URLS: {},
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(profileReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the SET_ROLES_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true
    })
    const action = {
      type: constants.setRoles.request,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the SET_ROLES_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.data.roles = {}
    })
    const action = {
      type: constants.setRoles.success,
      data: {},
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the SET_ROLES_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false
    })
    const action = {
      type: constants.setRoles.failure,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_SETTINGS_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true
    })
    const action = {
      type: constants.getSettings.request,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_SETTINGS_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      window.baseApiUrl = generateUrl('', 'v1/')
      window.X_IDENTITY_URL = generateUrl('')
      window.ONESIGNAL_ID = ''
      draft.URLS = {}
      draft.loading = false
    })
    const action = {
      type: constants.getSettings.success,
      URLS: {},
      data: {},
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_SETTINGS_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false
    })
    const action = {
      type: constants.getSettings.failure,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_PROFILE_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true
    })
    const action = {
      type: constants.getProfile.request,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_PROFILE_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false
      draft.data.userInfo = {}
      draft.data.userInfo.location = ''
    })
    const action = {
      type: constants.getProfile.success,
      data: {
        model: {
          location: {
            name: '',
          },
          profile: {},
        },
      },
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the GET_PROFILE_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false
    })
    const action = {
      type: constants.getProfile.failure,
    }
    expect(profileReducer(state, action)).toEqual(expectedResult)
  })
})
