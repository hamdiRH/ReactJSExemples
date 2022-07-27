import FourOFour from '../pages/FourOFour/Loadable'
import ErrorPage from '../pages/ErrorPage/Loadable'
import FourOThree from '../pages/FourOThree/Loadable'
import Landing from '../pages/Landing/Loadable'

export default {
  LANDING: {
    path: '/',
    component: Landing,
  },
  ROOT: {
    path: '/',
    component: Landing,
  },
  ERROR_PAGE: {
    path: '/error-page',
    component: ErrorPage,
  },
  FOUR_O_THREE: {
    path: '/403',
    component: FourOThree,
  },
  FOUR_O_FOUR: {
    path: '*',
    component: FourOFour,
  },
}
