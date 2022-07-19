/*
*
* FourOThree constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/FOUROTHREE/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}