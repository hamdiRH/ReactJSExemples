/**
 *
 * ForgetPassword
 *
 */

import React from 'react'

import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Button, Alert, Result } from 'antd'
import { FormattedMessage, useIntl, intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'

import messages from './messages'

import './forget-password.scss'
import code from '../../assets/images/Login/code.png'

const ForgetPassword = ({  data, local, forgetPassword }) => {
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
  const onFinish = values => {
    forgetPassword(values)
  }
  return (
    <div className="forget-password">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <Row className="row" align="middle">
        <Col md={16} sm={0} xs={0} className="col1" />
        {data.emailSuccessSend ? (
          <Col md={8} sm={24} xs={24} className="col2">
            <Result
              status="success"
              title="Password reset link has been sent to your email"
            />
          </Col>
        ) : (
          <Col md={8} sm={24} xs={24} className="col2">
            <img src={code} alt="code" width="50" />
            <h1 className="title">
              <FormattedMessage {...messages.title} />
            </h1>
            <h5 className="description">
              <FormattedMessage {...messages.description} />
            </h5>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              {errors.forgetPasswordError && (
                <Alert
                  message={errors.forgetPasswordError}
                  type="error"
                  showIcon
                  closable
                  style={{ padding: '3px', marginBottom: '5px' }}
                />
              )}
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email Adress!',
                  },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
              >
                <Input placeholder="Email Adress" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading.forgetPasswordLoading}
                  disabled={loading.forgetPasswordLoading}
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </Col>
        )}
      </Row>
    </div>
  )
}

ForgetPassword.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
  forgetPassword: PropTypes.func.isRequired,
}

export default ForgetPassword
