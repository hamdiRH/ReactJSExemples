/*
*
* NoData constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/NODATA/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}