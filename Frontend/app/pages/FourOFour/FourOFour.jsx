/**
 *
 * FourOFour
 *
 */

import React from 'react'

import PropTypes from 'prop-types'

import { useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Result, Button } from 'antd'
import messages from './messages'

import './four-o-four.scss'

const FourOFour = ({  data, local }) => {
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
    <div className="four-o-four">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

FourOFour.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default FourOFour
