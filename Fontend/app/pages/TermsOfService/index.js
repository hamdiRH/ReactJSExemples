/**
 *
 * TermsOfService
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectTermsOfService, {
  selectData,
  selectLocal,
} from '../../shared/redux/termsofservice/selectors'
import reducer from '../../shared/redux/termsofservice/reducer'

import actions from '../../shared/redux/termsofservice/actions'

import saga from '../../shared/redux/termsofservice/saga'

import TermsOfService from './TermsOfService'

const TermsOfServiceIndex = props => <TermsOfService {...props} />

const mapStateToProps = createStructuredSelector({
  termsOfService: makeSelectTermsOfService(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'termsOfService', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'termsOfService', reducer }),
  withConnect,
  memo,
  withSaga,
)(TermsOfServiceIndex)
