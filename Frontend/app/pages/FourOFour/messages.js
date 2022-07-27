/*
 * FourOFour Messages
 *
 * This contains all the text for the FourOFour container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.FourOFour'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FourOFour container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'FourOFour',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of FourOFour',
  },
})
