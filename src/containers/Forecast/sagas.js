import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { config } from 'config';

export function* sagaWatcher() {
  yield takeLatest(['GET_FORECAST'], sagaWorker);
}

function* sagaWorker() {
  yield call(getLocationtSaga);
}

async function getLocationtSaga(location) {
  const response = await fetch(`${config.api.url.locationSearch}${location}`);

  return await response.json();
}
