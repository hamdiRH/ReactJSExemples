import { takeEvery, all } from 'redux-saga/effects'
import constants from './constants'
import * as api from '../../services/profile.service'

import { generateSaga, sagaTypes } from '../../utils/generic-saga'

export function* forgetPasswordWatcher() {
  yield takeEvery(
    constants.FORGET_PASSWORD.request,
    generateSaga(sagaTypes.POST, constants.FORGET_PASSWORD, api.forgetPassword),
  )
}

export function* resetPasswordWatcher() {
  yield takeEvery(
    constants.RESET_PASSWORD.request,
    generateSaga(sagaTypes.POST, constants.RESET_PASSWORD, api.resetPassword),
  )
}

export default function* forgetPasswordSaga() {
  yield all([forgetPasswordWatcher(), resetPasswordWatcher()])
}
