/*
*
* TermsOfService constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/TERMSOFSERVICE/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}