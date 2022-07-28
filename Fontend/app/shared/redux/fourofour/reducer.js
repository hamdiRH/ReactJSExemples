/*
 *
 * FourOFour reducer
 *
 */
import produce from 'immer';
import constants from './constants';

export const initialState = {
  data: {},
  local: {
    loading: {},
    errors: {},
  },
};

/* eslint-disable default-case, no-param-reassign */
const fourOFourReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
    }
  });

export default fourOFourReducer;
