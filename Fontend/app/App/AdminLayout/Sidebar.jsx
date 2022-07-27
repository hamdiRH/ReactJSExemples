import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import routes from 'shared/routes'

import {
  OrderedListOutlined,
  AppstoreOutlined,
  TeamOutlined,
  BookOutlined,
  KeyOutlined,
} from '@ant-design/icons'
const Sidebar = () => {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    setPath(window.location.pathname)
  }, [window.location.pathname])

  return (
    <aside className="layout-aside">
      <ul>
        <Link to={routes.ROOT.path} onClick={() => setPath('')}>
          <li className={path === '/' || path === '/dashboard' ? 'active' : ''}>
            <AppstoreOutlined />
            Dashboard
          </li>
        </Link>
        <Link
          to={routes.ADMIN_STUDENTS_MANAGEMENT.path}
          onClick={() => setPath('/students-management')}
        >
          <li className={path === '/students-management' ? 'active' : ''}>
            <TeamOutlined />
            Students
          </li>
        </Link>
        <Link
          to={routes.ADMIN_INSTRUCTOR_MANAGEMENT.path}
          onClick={() => setPath('/instructor-management')}
        >
          <li className={path === '/instructor-management' ? 'active' : ''}>
            <BookOutlined /> Instructors
          </li>
        </Link>
        <Link
          to={routes.ADMIN_QUIZ_MANAGEMENT.path}
          onClick={() => setPath('/admin-quiz-management')}
        >
          <li className={path === '/admin-quiz-management' ? 'active' : ''}>
            <OrderedListOutlined />
            Quiz
          </li>
        </Link>
        <Link
          to={routes.ADMIN_LESSON_MANAGEMENT.path}
          onClick={() => setPath('/admin-lesson-management')}
        >
          <li className={path === '/admin-lesson-management' ? 'active' : ''}>
            <BookOutlined />
            Lesson
          </li>
        </Link>
        <Link
          to={routes.ADMIN_SKILL_MANAGEMENT.path}
          onClick={() => setPath('/admin-skill-management')}
        >
          <li className={path === '/admin-skill-management' ? 'active' : ''}>
            <BookOutlined />
            Skill
          </li>
        </Link>
        <Link
          to={routes.ADMIN_SUPERSKILL_MANAGEMENT.path}
          onClick={() => setPath('/admin-superSkill-management')}
        >
          <li
            className={path === '/admin-superSkill-management' ? 'active' : ''}
          >
            <BookOutlined />
            SuperSkill
          </li>
        </Link>
        <Link
          to={routes.ADMIN_TRACK_MANAGEMENT.path}
          onClick={() => setPath('/admin-track-management')}
        >
          <li className={path === '/admin-track-management' ? 'active' : ''}>
            <BookOutlined />
            Track
          </li>
        </Link>
        <Link
          to={routes.ADMIN_VOUCHER_MANAGEMENT.path}
          onClick={() => setPath('/admin-voucher-management')}
        >
          <li className={path === '/admin-voucher-management' ? 'active' : ''}>
            <KeyOutlined />
            Voucher
          </li>
        </Link>
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {}

export default Sidebar
