/*
 *
 * Profile actions
 *
 */

import constants from './constants'
import { generateEmptyAction } from '../../utils/generic-saga'

export default {
  getSettings: generateEmptyAction(constants.GET_SETTINGS.request),
  getProfile: generateEmptyAction(constants.GET_PROFILE.request),
  refreshToken: generateEmptyAction(constants.REFRESH_TOKEN.request),
  logout: generateEmptyAction(constants.LOGOUT.request),
}
