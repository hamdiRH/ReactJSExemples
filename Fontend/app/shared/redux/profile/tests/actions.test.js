import actions from '../actions'
import constants from '../constants'

describe('setRoles action', () => {
  it('has a type of SET_ROLES_REQUEST', () => {
    const expected = {
      type: constants.setRoles.request,
    }
    expect(actions.setRoles()).toEqual(expected)
  })
})

describe('getSettings action', () => {
  it('has a type of GET_SETTINGS_REQUEST', () => {
    const expected = {
      type: constants.getSettings.request,
    }
    expect(actions.getSettings()).toEqual(expected)
  })
})

describe('getProfile action', () => {
  it('has a type of GET_SETTINGS_REQUEST', () => {
    const expected = {
      type: constants.getProfile.request,
    }
    expect(actions.getProfile()).toEqual(expected)
  })
})
