/**
 *
 * FourOThree
 *
 */

import React from 'react'

import PropTypes from 'prop-types'

import { useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Result, Button } from 'antd'

import messages from './messages'
import './four-o-three.scss'

const FourOThree = ({  data, local }) => {
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
    <div className="four-o-three">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

FourOThree.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default FourOThree
