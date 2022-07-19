/*
*
* Landing constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/LANDING/'

export default {
CLEAR_ERRORS: `${root}CLEAR_ERRORS`,
DEFAULT_ACTION: generateActionTypes(root, 'DEFAULT_ACTION'),
}