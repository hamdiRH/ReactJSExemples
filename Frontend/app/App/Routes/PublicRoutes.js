import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import routes from 'shared/routes'

const PublicRoutes = () => (
  <Switch>
    <Route exact path={routes.ROOT.path} component={routes.ROOT.component} />
    <Route
      exact
      path={routes.ERROR_PAGE.path}
      component={routes.ERROR_PAGE.component}
    />
    <Redirect exact to={routes.ROOT.path} />
  </Switch>
)

export default PublicRoutes
