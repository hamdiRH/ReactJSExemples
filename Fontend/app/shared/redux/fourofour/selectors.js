import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fourOFour state domain
 */

const selectFourOFourDomain = state => state.fourOFour || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FourOFour
 */

const makeSelectFourOFour = () =>
  createSelector(
    selectFourOFourDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectFourOFourDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectFourOFourDomain,
    substate => substate.local,
  )

export default makeSelectFourOFour;
export { selectData, selectLocal, selectFourOFourDomain };
