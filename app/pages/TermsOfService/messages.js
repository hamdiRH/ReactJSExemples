/*
 * TermsOfService Messages
 *
 * This contains all the text for the TermsOfService container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.TermsOfService'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TermsOfService container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'TermsOfService',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of TermsOfService',
  },
})
