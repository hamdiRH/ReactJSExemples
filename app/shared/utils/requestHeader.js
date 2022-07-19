export const requestHeader = options => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    ...options,
    'Accept-Language': `en-US`,
  },
})

export const requestHeaderWithoutToken = () => ({
  headers: {
    'Accept-Language': `en-US`,
  },
})

export const getToken = () => localStorage.getItem('token')
