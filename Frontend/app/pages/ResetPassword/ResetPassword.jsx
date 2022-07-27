/**
 *
 * ResetPassword
 *
 */

import React from 'react'
import { Row, Col, Form, Input, Button, Alert, Result } from 'antd'

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { FormattedMessage,useIntl , intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'
import code from '../../assets/images/Login/code.png'
import messages from './messages'

import './reset-password.scss'
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ResetPassword = ({ data, local, resetPassword }) => {
  const intl = useIntl()
  const { loading, errors } = local
  const query = useQuery()
  const token = query.get('token')

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
    resetPassword({ ...values, token })
  }
  return (
    <div className="reset-password">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <Row className="row" align="middle">
        <Col md={16} sm={0} xs={0} className="col1" />
        {data.resetMessageSuccess ? (
          <Col md={8} sm={24} xs={24} className="col2">
            <Result
              status="success"
              title="Your password has been successfully reset"
              extra={[
                <Button
                  type="primary"
                  onClick={() => {
                    window.location = '/'
                  }}
                >
                  Login
                </Button>,
              ]}
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
                name="password"
                // label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error(
                          'The two passwords that you entered do not match!',
                        ),
                      )
                    },
                  }),
                ]}
              >
                <Input type="password" placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading.resetPasswordLoading}
                  disabled={loading.resetPasswordLoading}
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

ResetPassword.propTypes = {
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired,
}

export default ResetPassword
