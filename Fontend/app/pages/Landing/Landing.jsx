/**
 *
 * Landing
 *
 */

import React from 'react'

import PropTypes from 'prop-types'
import { Col, Row, Divider, Tag } from 'antd'
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
      <div className="navbar ">
        <div className="container">
          <div className="logo ">
            <img src={ReactLogo} alt="logo" width={40} />
            <h1>React JS Exemples</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Row className="d-flex justify-content-between ">
          <Col span={16} className="mx-2">
            <Card data={data} />
          </Col>
          <Col span={7} className="bg-white mx-1">
            <h1 className="tags-title ">TAGS</h1>
            <Divider className="divider-tag" />
            <Row className="d-flex justify-content-between px-3">
              <Col>
                <strong className="font-weight-bold">Hooks</strong>
              </Col>
              <Col>
                <Tag className="rounded-circle p-1" color="cyan">
                  250
                </Tag>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  )
}

Landing.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default Landing
