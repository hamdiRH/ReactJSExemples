export const generateUrl = (url, extension) =>
  `http://${url}/${extension || ''}`
