import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fechLessons = async ({
  sortBy = '-createdAt',
  limit = 20,
  page = 1,
}) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .lesson()
      .fechLesson(sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const createLesson = async ({ content, title, page, limit }) => {
  await axios.post(
    `${constants.baseApiUrl()}${constants.lesson().createLesson}`,
    { content, title },
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .lesson()
      .fechLesson('-createdAt', limit, page)}`,
    requestHeader(),
  )

  return result.data
}

export const deleteLesson = async ({ id, page }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.lesson().deleteLesson(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .lesson()
      .fechLesson('-createdAt', 10, page)}`,
    requestHeader(),
  )

  return result.data
}

export const updateLesson = async ({ id, ...rest }) => {
  const result = await axios.put(
    `${constants.baseApiUrl()}${constants.lesson().updateLesson(id)}`,
    rest,
    requestHeader(),
  )

  return result.data
}

export const fetchLessonName = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.lesson().fetchLessonName}`,
    requestHeader(),
  )

  return result.data
}
