/**
 *
 * App.js
 *
 *
 */
import React, { memo, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectProfile from 'shared/redux/profile/selectors'
import reducer from 'shared/redux/profile/reducer'
import actions from 'shared/redux/profile/actions'
import saga from 'shared/redux/profile/saga'
import Loading from 'shared/components/Loading'
import { isEmpty } from 'lodash'
import { push } from 'connected-react-router'
import PrivateRoutes from './Routes/PrivateRoutes'
import PublicRoutes from './Routes/PublicRoutes'
import { setAccessTokenIfDefined } from '../shared/utils/access-token'
import './global-styles.scss'

function App({ getSettings, getProfile, refreshToken, profile, logout }) {
  useInjectReducer({ key: 'profile', reducer })

  const {
    URLS,
    local: { isSignedIn },
  } = profile
  setAccessTokenIfDefined()

  useEffect(() => {
    getSettings()
  }, [])

  const renderLayout = () => {
    if (isSignedIn && localStorage.getItem('token')) {
      return (
        <Switch>
          <Route
            path="/"
            render={() => (
              <PrivateRoutes
                profile={profile}
                refreshToken={refreshToken}
                getProfile={getProfile}
                logout={logout}
              />
            )}
          />
        </Switch>
      )
    }
    return (
      <Switch>
        <Route path="/" component={PublicRoutes} />
      </Switch>
    )
  }
  if (!isEmpty(URLS)) {
    return <Fragment>{renderLayout()}</Fragment>
  }
  return <Loading />
}
App.propTypes = {
  getSettings: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  refreshToken: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
})

const mapDispatchToProps = {
  ...actions,
  pushFunc: push,
}

const withSaga = injectSaga({ key: 'profile', saga, mode: DAEMON })

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, memo, withSaga)(App)
