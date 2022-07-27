/**
 *
 * Asynchronously loads the component for FourOFour
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
