/*
 *
 * Profile constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Profile/'

export default {
  CLEAR_ERRORS: `${root}CLEAR_ERRORS`,
  GET_SETTINGS: generateActionTypes(root, 'GET_SETTINGS'),
  GET_PROFILE: generateActionTypes(root, 'GET_PROFILE'),
  REFRESH_TOKEN: generateActionTypes(root, 'REFRESH_TOKEN'),
  LOGOUT: generateActionTypes(root, 'LOGOUT'),
}
