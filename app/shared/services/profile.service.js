import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const getSettings = async () => {
  const result = await axios.post('/_settings')
  return result.data
}

export const signIn = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().login}`,
    body,
  )
  return result.data
}

export const signUp = async ({ name, email, password, token, type }) => {
  let role
  switch (type) {
    case 'inviteStudent':
      role = 'student'
      break
    case 'inviteInstructor':
      role = 'instructor'
      break
    default:
      role = 'student'
  }
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().register}?token=${token}`,
    { name, email, password, role },
  )
  return result.data
}

export const forgetPassword = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().forgetPassword}`,
    body,
  )
  return result.data
}

export const resetPassword = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().resetPassword(body.token)}`,
    { password: body.password },
  )
  return result.data
}

export const getProfile = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.user().getProfile}`,
    requestHeader(),
  )
  return result.data
}

export const checkRegisterToken = async ({ token, type }) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().checkRegisterToken(token)}`,
    { type },
  )
  return result.data
}

export const refreshToken = async () => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().refreshToken}`,
  )
  return result.data
}

export const logout = async () => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.auth().logout}`,
  )
  return result.data
}

export const completeLesson = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().completeLesson}`,
    body,
    requestHeader(),
  )
  return result.data
}

export const completeQuiz = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().completeQuiz}`,
    body,
    requestHeader(),
  )
  return result.data
}

export const updateProfile = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().updateProfile}`,
    body,
    requestHeader(),
  )
  return result.data
}

export const updateProfilePicture = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().updateProfilePicture}`,
    body,
    requestHeader(),
  )
  return result.data
}

export const updatePassword = async (body) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().updatePassword}`,
    body,
    requestHeader(),
  )
  return result.data
}
