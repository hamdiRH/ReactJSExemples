import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the errorPage state domain
 */

const selectErrorPageDomain = state => state.errorPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ErrorPage
 */

const makeSelectErrorPage = () =>
  createSelector(
    selectErrorPageDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectErrorPageDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectErrorPageDomain,
    substate => substate.local,
  )

export default makeSelectErrorPage;
export { selectData, selectLocal, selectErrorPageDomain };
