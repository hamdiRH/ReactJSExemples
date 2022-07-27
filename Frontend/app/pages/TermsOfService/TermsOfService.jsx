/**
 *
 * TermsOfService
 *
 */

import React from 'react'

import PropTypes from 'prop-types'

import { FormattedMessage, useIntl, intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'

import messages from './messages'

import './terms-of-service.scss'

const TermsOfService = ({ intl, data, local }) => {
  const { loading, errors } = local
  const intl = useIntl()

  const helmetMessages = {
    helmetTitle: intl.formatMessage({
      ...messages.helmetTitle,
    }),
    helmetName: intl.formatMessage({
      ...messages.helmetName,
    }),
    helmetContent: intl.formatMessage({
      ...messages.helmetContent,
    }),
  }

  return (
    <div className="terms-of-service">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

TermsOfService.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default TermsOfService
