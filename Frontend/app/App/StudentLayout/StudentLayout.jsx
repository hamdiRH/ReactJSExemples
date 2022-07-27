/**
 *
 * StudentLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

import './student-layout.scss'

function StudentLayout({ children, handleLogout }) {
  return (
    <div className="student-layout">
      <Header handleLogout={handleLogout} />
      <main className="layout-main">
        <section className="layout-section">{children}</section>
      </main>
      <footer />
    </div>
  )
}

StudentLayout.propTypes = {
  children: PropTypes.any,
  handleLogout: PropTypes.func.isRequired,
}

export default StudentLayout
