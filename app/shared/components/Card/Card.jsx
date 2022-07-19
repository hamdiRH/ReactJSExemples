/**
 *
 * Card
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import './card.scss'

function Card({ data }) {
  console.log('data', data)
  return (
    <div className="card">
      <FormattedMessage {...messages.header} />
    </div>
  )
}

Card.propTypes = {}

export default memo(Card)
