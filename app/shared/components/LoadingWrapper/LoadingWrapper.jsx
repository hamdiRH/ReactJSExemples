/**
 *
 * LoadingWrapper
 *
 */

import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Skeleton, message, Result, Button } from 'antd'
import { isEmpty } from 'lodash'
import { renderArrayErrors } from 'shared/utils/errors.helper'
import './loading-wrapper.scss'

function LoadingWrapper({
  children,
  className,
  errorTypeGet,
  errorTypePost,
  skeletonConfig,
  renderErrorUi,
  displayAlert,
  cleanErrorFunction,
}) {
  const alert = body => {
    message.error(body)
  }

  const renderGetErrors = () => {
    if (!isEmpty(errorTypeGet)) {
      const errorUi = renderErrorUi || (
        <Result
          title="No Data"
          subTitle="Sorry, something went wrong."
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      )
      return (
        <div className="unavailableData-holder x-flex-h-center-v-center">
          {errorUi}
        </div>
      )
    }
    return children
  }

  const renderPostErrorsMessage = () => {
    if (!isEmpty(errorTypePost)) {
      return (
        <div className={`x-error-message ${className}`}>
          {renderArrayErrors(errorTypePost)}
        </div>
      )
    }
    return <Fragment />
  }

  const errorBody = () => {
    if (!isEmpty(errorTypeGet)) {
      return errorTypeGet
    }
    if (!isEmpty(errorTypePost)) {
      return errorTypePost
    }
    return []
  }

  if (displayAlert) {
    const body = errorBody()
    if (!isEmpty(body)) {
      alert(body)
      cleanErrorFunction()
    }

    return children
  }
  return (
    <Fragment>
      <Skeleton {...skeletonConfig}>{renderGetErrors()}</Skeleton>
      {renderPostErrorsMessage()}
    </Fragment>
  )
}

LoadingWrapper.propTypes = {
  cleanErrorFunction: PropTypes.func,
  renderErrorUi: PropTypes.any,
  children: PropTypes.node,
  errorTypeGet: PropTypes.any,
  errorTypePost: PropTypes.any,
  skeletonConfig: PropTypes.object,
  errorIconType: PropTypes.string,
  displayAlert: PropTypes.bool,
  className: PropTypes.string,
}

LoadingWrapper.defaultProps = {
  cleanErrorFunction: () => {},
  skeletonConfig: { loading: false },
  errorTypeGet: [],
  errorTypePost: [],
  displayAlert: false,
  children: <Fragment />,
  className: '',
}

export default memo(LoadingWrapper)
