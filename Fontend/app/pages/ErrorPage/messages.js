/*
 * ErrorPage Messages
 *
 * This contains all the text for the ErrorPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.ErrorPage'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ErrorPage container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'ErrorPage',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of ErrorPage',
  },
})
