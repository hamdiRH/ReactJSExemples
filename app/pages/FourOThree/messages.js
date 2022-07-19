/*
 * FourOThree Messages
 *
 * This contains all the text for the FourOThree container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.FourOThree'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FourOThree container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'FourOThree',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of FourOThree',
  },
})
