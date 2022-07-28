import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forgetPassword state domain
 */

const selectForgetPasswordDomain = state => state.forgetPassword || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ForgetPassword
 */

const makeSelectForgetPassword = () =>
  createSelector(
    selectForgetPasswordDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectForgetPasswordDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectForgetPasswordDomain,
    substate => substate.local,
  )

export default makeSelectForgetPassword;
export { selectData, selectLocal, selectForgetPasswordDomain };
