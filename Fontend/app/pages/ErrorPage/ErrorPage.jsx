/**
 *
 * ErrorPage
 *
 */

import React from 'react'

import PropTypes from 'prop-types'

import { useIntl} from 'react-intl'
import { Helmet } from 'react-helmet'
import { Result, Button } from 'antd'
import messages from './messages'

import './error-page.scss'

const ErrorPage = ({  data, local }) => {
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
    <div className="error-page">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

ErrorPage.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default ErrorPage
