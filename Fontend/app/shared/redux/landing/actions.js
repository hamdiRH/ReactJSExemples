/*
 *
 * Landing actions
 *
 */
 import { generateEmptyAction } from '../../utils/generic-saga'
import constants from './constants';

export default {
  defaultAction: generateEmptyAction(constants.DEFAULT_ACTION.request),
}
