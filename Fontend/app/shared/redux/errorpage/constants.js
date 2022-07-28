/*
*
* ErrorPage constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/ERRORPAGE/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}