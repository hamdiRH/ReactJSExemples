/**
 *
 * FourOFour
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectFourOFour, {
  selectData,
  selectLocal,
} from '../../shared/redux/fourofour/selectors'
import reducer from '../../shared/redux/fourofour/reducer'

import actions from '../../shared/redux/fourofour/actions'

import saga from '../../shared/redux/fourofour/saga'

import FourOFour from './FourOFour'

const FourOFourIndex = props => <FourOFour {...props} />

const mapStateToProps = createStructuredSelector({
  fourOFour: makeSelectFourOFour(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'fourOFour', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'fourOFour', reducer }),
  withConnect,
  memo,
  withSaga,
)(FourOFourIndex)
