import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Space, Avatar, Divider } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { UserContext } from '../context'

const Header = ({ handleLogout }) => {
  const { userInfo } = useContext(UserContext)
  const userNameCaracter = nameString => {
    if (nameString) {
      // const fullName = nameString.trim().split(' ')
      // const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0)
      // return initials.toUpperCase()
      const matches = nameString.match(/\b(\w)/g)
      return matches.join('')
    }
    return ''
  }
  return (
    <header className="layout-header">
      <Link to="/" style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h1 className="logo">Way2Code </h1>
      </Link>
      <Space className="header-icon" split={<Divider type="vertical" />}>
        <Avatar
          style={{
            color: '#fff',
            backgroundColor: 'rgba(255,0,0,0.8)',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          size={40}
        >
          {userInfo && userNameCaracter(userInfo.name)}
        </Avatar>

        <h2>{userInfo && userInfo.name}</h2>
        <LogoutOutlined onClick={handleLogout} style={{ fontSize: '24px' }} />
      </Space>
    </header>
  )
}

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default Header
