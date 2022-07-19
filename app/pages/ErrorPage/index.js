/**
 *
 * ErrorPage
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectErrorPage, {
  selectData,
  selectLocal,
} from '../../shared/redux/errorpage/selectors'
import reducer from '../../shared/redux/errorpage/reducer'

import actions from '../../shared/redux/errorpage/actions'

import saga from '../../shared/redux/errorpage/saga'

import ErrorPage from './ErrorPage'

const ErrorPageIndex = props => <ErrorPage {...props} />

const mapStateToProps = createStructuredSelector({
  errorPage: makeSelectErrorPage(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'errorPage', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'errorPage', reducer }),
  withConnect,
  memo,
  withSaga,
)(ErrorPageIndex)
