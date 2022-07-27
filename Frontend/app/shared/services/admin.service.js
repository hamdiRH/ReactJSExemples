import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fetchStudents = async ({
  role = 'student',
  sortBy = '-createdAt',
  limit = 10,
  page = 1,
}) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .user()
      .fechUsers(role, sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const addStudents = async students => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().addStudents}`,
    { students },
    requestHeader(),
  )
  return result.data
}

export const deleteStudent = async ({ body, id }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.user().deleteUserById(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .user()
      .fechUsers(body.role, body.sortBy, body.limit, body.page)}`,
    requestHeader(),
  )
  return result.data
}

export const updateStudent = async ({ name, role, email, id }) => {
  const result = await axios.put(
    `${constants.baseApiUrl()}${constants.user().updateUserById(id)}`,
    { name, role, email },
    requestHeader(),
  )

  return result.data
}

export const fetchInstructors = async ({
  role = 'instructor',
  sortBy = '-createdAt',
  limit = 50,
  page = 1,
}) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .user()
      .fechUsers(role, sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const deleteInstructor = async ({ id, body }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.user().deleteUserById(id)}`,
    requestHeader(),
  )

  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .user()
      .fechUsers(body.role, body.sortBy, body.limit, body.page)}`,
    requestHeader(),
  )

  return result.data
}

export const updateInstructor = async ({ name, role, email, id }) => {
  const result = await axios.put(
    `${constants.baseApiUrl()}${constants.user().updateUserById(id)}`,
    { name, role, email },
    requestHeader(),
  )
  return result.data
}

export const addInstructors = async instructors => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.user().addInstructors}`,
    { instructors },
    requestHeader(),
  )
  return result.data
}

export const getStats = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.user().getStats}`,
    requestHeader(),
  )
  return result.data
}
