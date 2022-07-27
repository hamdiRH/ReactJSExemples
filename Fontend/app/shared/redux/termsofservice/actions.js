/*
 *
 * TermsOfService actions
 *
 */
 import { generateEmptyAction } from '../../utils/generic-saga'
import constants from './constants';

export default {
  defaultAction: generateEmptyAction(constants.defaultAction.request),
}
