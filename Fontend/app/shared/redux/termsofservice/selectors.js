import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the termsOfService state domain
 */

const selectTermsOfServiceDomain = state => state.termsOfService || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TermsOfService
 */

const makeSelectTermsOfService = () =>
  createSelector(
    selectTermsOfServiceDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectTermsOfServiceDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectTermsOfServiceDomain,
    substate => substate.local,
  )

export default makeSelectTermsOfService;
export { selectData, selectLocal, selectTermsOfServiceDomain };
