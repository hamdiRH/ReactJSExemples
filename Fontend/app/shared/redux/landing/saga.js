import { takeEvery, all } from 'redux-saga/effects';
import constants from './constants';
import { generateSaga, sagaTypes } from '../../utils/generic-saga'

export function* defaultActionWatcher() {
  yield takeEvery(
    constants.DEFAULT_ACTION.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.DEFAULT_ACTION),
  )
}

export default function* landingSaga() {
  yield all([
    defaultActionWatcher(),
  ])
}
