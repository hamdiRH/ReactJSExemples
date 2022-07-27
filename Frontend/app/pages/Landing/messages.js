/*
* Landing Messages
*
* This contains all the text for the Landing container.
*/

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Landing';

export default defineMessages({
header: {
id: `${scope}.header`,
defaultMessage: 'This is the Landing container!',
},
helmetTitle: {
id: `${scope}.helmetTitle`,
defaultMessage:'Landing',
},
helmetName: {
id: `${scope}.helmetName`,
defaultMessage: 'description',
},
helmetContent: {
id: `${scope}.helmetContent`,
defaultMessage: 'Description of Landing',
},
});