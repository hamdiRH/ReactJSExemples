import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const fetchTracks = async ({ sortBy, limit, page }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .track()
      .fetchTracks(sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}

export const fetchTrackById = async ({ id }) => {
  
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.track().fetchTrackById(id)}`,
    requestHeader(),
  )
  return result.data
}

export const getTracksById = async ()=>{
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.track().getTracksById}`,
    requestHeader(),
  )
  return result.data
}

export const createTrack = async ({ data, page, limit }) => {
  await axios.post(
    `${constants.baseApiUrl()}${constants.track().createTrack}`,
    data,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .track()
      .fetchTracks('-createdAt', limit, page)}`,
    requestHeader(),
  )

  return result.data
}

export const deleteTrack = async ({ id, page }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.track().deleteTrack(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .track()
      .fetchTracks('-createdAt', 10, page)}`,
    requestHeader(),
  )

  return result.data
}

export const updateTrack = async ({ data, id }) => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.track().updateTrack(id)}`,
    data,
    requestHeader(),
  )

  return result.data
}

export const fetchTracksName = async () => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.track().fetchTracksname}`,
    requestHeader(),
  )
  return result.data
}

export const AddTrackToStudent = async body => {
  const result = await axios.post(
    `${constants.baseApiUrl()}${constants.track().AddTrackToStudent}`,
    body,
    requestHeader(),
  )
  return result.data
}
