import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fetchSuperSkill = async ({ sortBy, limit, page }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .superSkill()
      .fetchSuperSkill(sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const fetchSuperSkillById = async ({ id }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .superSkill()
      .fetchSuperSkillById(id)}`,
    requestHeader(),
  )
  return result.data
}

export const createSuperSkill = async ({ data, page, limit }) => {
  await axios.post(
    `${constants.baseApiUrl()}${constants.superSkill().createSuperSkill}`,
    data,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .superSkill()
      .fetchSuperSkill('-createdAt', limit, page)}`,
    requestHeader(),
  )

  return result.data
}

export const deleteSuperSkill = async ({ id, page }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.superSkill().deleteSuperSkill(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .superSkill()
      .fetchSuperSkill('-createdAt', 10, page)}`,
    requestHeader(),
  )

  return result.data
}

export const updateSuperSkill = async ({ id, formData }) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.superSkill().updateSuperSkill(id)}`,
    formData,
    requestHeader(),
  )
  return result.data
}

export const fetchSuperSkillName = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.superSkill().fetchSuperSkillName}`,
    requestHeader(),
  )
  return result.data
}
