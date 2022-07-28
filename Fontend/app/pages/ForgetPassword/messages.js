/*
 * ForgetPassword Messages
 *
 * This contains all the text for the ForgetPassword container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.ForgetPassword'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ForgetPassword container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'ForgetPassword',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of ForgetPassword',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Forget Password',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      "Enter the email associated with your account and we'll send you a link a reset your password.",
  },
})
