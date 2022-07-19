/*
 * ResetPassword Messages
 *
 * This contains all the text for the ResetPassword container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.ResetPassword'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ResetPassword container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'ResetPassword',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of ResetPassword',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Reset Password',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Enter your new password.',
  },
})
