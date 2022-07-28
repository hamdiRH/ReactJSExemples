import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the landing state domain
 */

const selectLandingDomain = state => state.landing || initialState;

/**
 * Default selector used by Landing
 */

const makeSelectLanding = () =>
  createSelector(
    selectLandingDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectLandingDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectLandingDomain,
    substate => substate.local,
  )

/**
 * Other specific selectors
 */

export default makeSelectLanding;
export { selectData, selectLocal, selectLandingDomain };
