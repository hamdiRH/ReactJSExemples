/**
 *
 * Loading
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';

import './loading.scss'

function Loading() {
  return (
    <div className="loading">
      <svg
        className="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </div>
  )
}

Loading.propTypes = {}

export default memo(Loading)
