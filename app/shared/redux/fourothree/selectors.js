import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fourOThree state domain
 */

const selectFourOThreeDomain = state => state.fourOThree || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FourOThree
 */

const makeSelectFourOThree = () =>
  createSelector(
    selectFourOThreeDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectFourOThreeDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectFourOThreeDomain,
    substate => substate.local,
  )

export default makeSelectFourOThree;
export { selectData, selectLocal, selectFourOThreeDomain };
