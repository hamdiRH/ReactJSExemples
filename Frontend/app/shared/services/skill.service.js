import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fetchSkillName = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.skill().fetchSkillName}`,
    requestHeader(),
  )

  return result.data
}

export const fetchSkill = async ({ sortBy, limit, page }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .skill()
      .fetchSkill(sortBy, limit, page)}`,
    requestHeader(),
  )

  return result.data
}

export const fetchSkillById = async ({ id }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.skill().fetchSkillById(id)}`,
    requestHeader(),
  )

  return result.data
}

export const deleteSkill = async ({ id, page }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.skill().deleteSkill(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .skill()
      .fetchSkill('-createdAt', 10, page)}`,
    requestHeader(),
  )

  return result.data
}

export const createSkill = async ({ name, lesson, quiz }) => {
  const body = {
    name,
    chapter: {
      lesson,
      quiz,
    },
  }
  await axios.post(
    `${constants.baseApiUrl()}${constants.skill().createSkill}`,
    body,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .skill()
      .fetchSkill('-createdAt', 20, 1)}`,
    requestHeader(),
  )

  return result.data
}

export const updateSkill = async ({ id, name, lesson, quiz }) => {
  const body = {
    name,
    chapter: {
      lesson,
      quiz,
    },
  }
  const result = await axios.put(
    `${constants.baseApiUrl()}${constants.skill().updateSkill(id)}`,
    body,
    requestHeader(),
  )

  return result.data
}