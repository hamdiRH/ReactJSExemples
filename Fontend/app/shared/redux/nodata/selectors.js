import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the noData state domain
 */

const selectNoDataDomain = state => state.noData || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NoData
 */

const makeSelectNoData = () =>
  createSelector(
    selectNoDataDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectNoDataDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectNoDataDomain,
    substate => substate.local,
  )

export default makeSelectNoData;
export { selectData, selectLocal, selectNoDataDomain };
