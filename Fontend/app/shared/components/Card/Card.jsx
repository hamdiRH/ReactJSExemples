/**
 *
 * Card
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';
import { Row, Col, Tag } from 'antd'
import _ from 'lodash'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import './card.scss'

function Card({ data }) {
  return data.posts.map((el) => (
    <Row className="card-project" key={Math.random()}>
      <Col span={8}>
        <img src={el.image} alt="" className="cover" />
      </Col>
      <Col span={16} className="p-3">
        {el.tags.map((tag) => (
          <Tag color="cyan" key={Math.random()} className="rounded-3">
            {tag}
          </Tag>
        ))}
        <h1 className="title">{el.name}</h1>
        <p className="description">{el.description}</p>
        <p className="date">{moment(el.date).format('LLLL')}</p>
      </Col>
      {/* <FormattedMessage {...messages.header} /> */}
    </Row>
  ))
}

Card.propTypes = {}

export default memo(Card)
