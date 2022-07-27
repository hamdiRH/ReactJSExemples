/**
 *
 * FourOThree
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectFourOThree, {
  selectData,
  selectLocal,
} from '../../shared/redux/fourothree/selectors'
import reducer from '../../shared/redux/fourothree/reducer'

import actions from '../../shared/redux/fourothree/actions'

import saga from '../../shared/redux/fourothree/saga'

import FourOThree from './FourOThree'

const FourOThreeIndex = props => <FourOThree {...props} />

const mapStateToProps = createStructuredSelector({
  fourOThree: makeSelectFourOThree(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'fourOThree', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'fourOThree', reducer }),
  withConnect,
  memo,
  withSaga,
)(FourOThreeIndex)
