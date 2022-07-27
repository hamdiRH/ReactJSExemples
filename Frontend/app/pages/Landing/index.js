/**
*
* Landing
*
*/

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import makeSelectLanding, {selectData, selectLocal} from '../../shared/redux/landing/selectors';
import reducer from '../../shared/redux/landing/reducer';

import actions from '../../shared/redux/landing/actions';

import saga from '../../shared/redux/landing/saga';


import Landing from './Landing';

const LandingIndex = props => (
    <Landing {...props} />
  )

const mapStateToProps = createStructuredSelector({
landing: makeSelectLanding(),
data: selectData(),
local: selectLocal(),
});

const mapDispatchToProps = {
  ...actions,

};

const withSaga = injectSaga({ key: 'landing', saga, mode: DAEMON });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
injectReducer({ key: 'landing', reducer }),
withConnect,
memo,
withSaga,
)(LandingIndex);
