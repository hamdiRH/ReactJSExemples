import { takeEvery, all } from 'redux-saga/effects';
import constants from './constants';
import { generateSaga, sagaTypes } from '../../utils/generic-saga'

export function* defaultActionWatcher() {
  yield takeEvery(
    constants.defaultAction.request,
    generateSaga(sagaTypes.WITHOUT_API, constants.defaultAction),
  )
}

export default function* noDataSaga() {
  yield all([
    defaultActionWatcher(),
  ])
}
