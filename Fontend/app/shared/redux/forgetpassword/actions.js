/*
 *
 * ForgetPassword actions
 *
 */
import { generateActionWithBody } from '../../utils/generic-saga'
import constants from './constants'

export default {
  forgetPassword: generateActionWithBody(constants.FORGET_PASSWORD.request),
  resetPassword: generateActionWithBody(constants.RESET_PASSWORD.request),
}
