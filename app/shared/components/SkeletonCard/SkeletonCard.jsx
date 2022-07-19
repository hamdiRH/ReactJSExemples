/**
 *
 * SkeletonCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'antd'

import './skeleton-card.scss'

function SkeletonCard({ style }) {
  return [1, 2, 3, 4].map(() => (
    <Card
      style={style || { width: 240, margin: '20px' }}
      loading={true}
      key={Math.random()}
      className="card"
    />
  ))
}

SkeletonCard.propTypes = {
  style: PropTypes.object,
}

SkeletonCard.defaultProps = {
  style: null,
}

export default SkeletonCard
