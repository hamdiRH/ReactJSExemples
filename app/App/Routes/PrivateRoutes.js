import React, { useEffect, useState } from 'react'
// import moment from 'moment'
import PropTypes from 'prop-types'
import Loading from 'shared/components/Loading'
import { UserContext } from '../context'

const PublicRoutes = ({
  // refreshToken,
  getProfile,
  logout,
  profile: { local, data },
}) => {
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    setUserInfo(data.userInfo)
  }, [data])

  const switchPrivateRoute = (role) => {
    switch (role) {
      case 'admin':
        return <AdminRoutes handleLogout={logout} />
      default:
        return <StudentRoutes handleLogout={logout} />
    }
  }
  return local.loading.fetchProfileLoading ? (
    <Loading />
  ) : (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {switchPrivateRoute(data.userInfo.role)}
    </UserContext.Provider>
  )
}

PublicRoutes.propTypes = {
  getProfile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

export default PublicRoutes

// how to use context
// import React, { useContext } from 'react'
// import { UserContext } from '../context'
// const { userInfo } = useContext(UserContext)
