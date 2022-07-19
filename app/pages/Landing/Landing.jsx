/**
 *
 * Landing
 *
 */

import React from 'react'

import PropTypes from 'prop-types'
import { Col, Row } from 'antd'
import { FormattedMessage, useIntl, intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'
import ReactLogo from 'assets/logo/react.png'
import messages from './messages'
import Card from 'shared/components/Card'
import './landing.scss'

const Landing = ({ data, local }) => {
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
    <div className="landing">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <div className="navbar px-10">
        <div className="logo ">
          <img src={ReactLogo} alt="logo" width={40} />
          <h1>React JS Exemples</h1>
        </div>
      </div>
      <div className="px-10 mt-5">
        <Row>
          <Col span={16} className="border border-primary">
            <Card data={data} />
          </Col>
          <Col span={8} className="border border-secondary">
            col-12
          </Col>
        </Row>
      </div>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

Landing.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default Landing
