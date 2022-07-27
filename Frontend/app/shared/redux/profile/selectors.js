import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the profile state domain
 */

const selectProfileDomain = state => state.profile || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  )
const makeSelectRoles = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.data.userInfo.roles,
  )
const makeSelectURLS = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.URLS,
  )
const makeSelectLoading = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.local.loading.globalLoading,
  )

const makeSelectUserInfo = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.data.userInfo,
  )

const selectIsSignedIn = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.local.isSignedIn,
  )

const selectLoginLoading = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.local.loading.loginLoading,
  )

const makeSelectLocal = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.local,
  )

export default makeSelectProfile
export {
  selectProfileDomain,
  makeSelectRoles,
  makeSelectLoading,
  makeSelectURLS,
  makeSelectUserInfo,
  selectIsSignedIn,
  selectLoginLoading,
  makeSelectLocal,
  makeSelectProfile,
}
