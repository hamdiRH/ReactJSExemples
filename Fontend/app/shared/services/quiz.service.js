import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fechQuiz = async ({
  superSkill,
  sortBy = '-createdAt',
  limit = 10,
  page = 1,
}) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .quiz()
      .fechQuiz(superSkill, sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const createQuiz = async ({ title, questions, limit, page }) => {
  await axios.post(
    `${constants.baseApiUrl()}${constants.quiz().createQuiz}`,
    { title, questions },
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .quiz()
      .fechQuiz(null, '-createdAt', limit, page)}`,
    requestHeader(),
  )

  return result.data
}

export const deleteQuiz = async ({ id, page }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.quiz().deleteQuiz(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .quiz()
      .fechQuiz(null, '-createdAt', 10, page)}`,
    requestHeader(),
  )

  return result.data
}

export const updateQuiz = async ({ id, values }) => {
  const result = await axios.put(
    `${constants.baseApiUrl()}${constants.quiz().updateQuiz(id)}`,
    { ...values },
    requestHeader(),
  )

  return result.data
}

export const fetchQuizName = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.quiz().fetchQuizName}`,
    requestHeader(),
  )

  return result.data
}
