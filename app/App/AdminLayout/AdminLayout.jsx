/**
 *
 * adminLayout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Aside from './Sidebar'
import './admin-layout.scss'

function AdminLayout({ children, handleLogout }) {
  return (
    <div className="admin-layout">
      <Header handleLogout={handleLogout} />
      <main className="layout-main">
        <Aside />
        <section className="layout-section">{children}</section>
      </main>
      <footer />
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.any,
  handleLogout: PropTypes.func.isRequired,
}

export default AdminLayout
