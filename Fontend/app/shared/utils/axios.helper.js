import axios from 'axios'
import moment from 'moment'

import { refreshToken } from '../services/profile.service'

// Add credentail
axios.defaults.withCredentials = true

// Silent Refresh Access Token

axios.interceptors.request.use(async config => {
  const expires = localStorage.getItem('expires')
  const token = config.headers.Authorization

  try {
    if (token && moment().isAfter(expires)) {
      const {
        accessToken: { token: newToken, expires: newTokenExpires },
      } = await refreshToken()

      localStorage.setItem('token', newToken)
      localStorage.setItem('expires', newTokenExpires)

      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${newToken}`
    }

    return config
  } catch (error) {
    return config
  }
})
