/*
*
* FourOFour constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/FOUROFOUR/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}