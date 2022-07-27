/*
 *
 * ForgetPassword constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/FORGETPASSWORD/'

export default {
  CLEAR_ERRORS: `${root}CLEAR_ERRORS`,
  FORGET_PASSWORD: generateActionTypes(root, 'FORGET_PASSWORD'),
  RESET_PASSWORD: generateActionTypes(root, 'RESET_PASSWORD'),
}
