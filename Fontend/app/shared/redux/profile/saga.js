import { takeEvery, all } from 'redux-saga/effects'

import {
  getSettings,
  getProfile,
  refreshToken,
  logout,
} from 'shared/services/profile.service'

import constants from './constants'
import { generateSaga, sagaTypes } from '../../utils/generic-saga'

export function* getSettingsWatcher() {
  yield takeEvery(
    constants.GET_SETTINGS.request,
    generateSaga(sagaTypes.POST, constants.GET_SETTINGS, getSettings),
  )
}

export function* getProfileWatcher() {
  yield takeEvery(
    constants.GET_PROFILE.request,
    generateSaga(sagaTypes.POST, constants.GET_PROFILE, getProfile),
  )
}
export function* refreshTokenWatcher() {
  yield takeEvery(
    constants.REFRESH_TOKEN.request,
    generateSaga(sagaTypes.POST, constants.REFRESH_TOKEN, refreshToken),
  )
}
export function* logoutWatcher() {
  yield takeEvery(
    constants.LOGOUT.request,
    generateSaga(sagaTypes.POST, constants.LOGOUT, logout),
  )
}

export default function* profileSaga() {
  yield all([
    getSettingsWatcher(),
    getProfileWatcher(),
    refreshTokenWatcher(),
    logoutWatcher(),
  ])
}
