/**
 *
 * ResetPassword
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectForgetPassword, {
  selectData,
  selectLocal,
} from '../../shared/redux/forgetpassword/selectors'
import reducer from '../../shared/redux/forgetpassword/reducer'

import actions from '../../shared/redux/forgetpassword/actions'

import saga from '../../shared/redux/forgetpassword/saga'

import ResetPassword from './ResetPassword'

const ResetPasswordIndex = props => <ResetPassword {...props} />

const mapStateToProps = createStructuredSelector({
  resetPassword: makeSelectForgetPassword(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'forgetPassword', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'forgetPassword', reducer }),
  withConnect,
  memo,
  withSaga,
)(ResetPasswordIndex)
