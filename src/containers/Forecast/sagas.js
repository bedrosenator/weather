import { takeLatest, put, call, select } from 'redux-saga/effects';
import { config } from 'config';
import { GET_GEO_POSITION, GET_LOCATION } from 'containers/Forecast/constants';
import {
  getForecastByLocationSuccess,
  getGeoPositionSuccess,
  getForecastByGeoPositionSuccess,
  getForecastError,
} from './actions';

export function* sagaWatcher() {
  yield takeLatest([GET_GEO_POSITION], getGeoPositionSaga);
  yield takeLatest([GET_LOCATION], getLocationSaga);
}

function* makeRequest(params) {
  const url = config.api.url.weather + 'weather?APPID=' + config.api.APPID;
  const response = yield fetch(url + params);

  if (response.status !== 200) {
    try {
      const json = yield response.json();
      yield put(getForecastError({ error: json }))
    } catch (e) {
      yield put(getForecastError({ error: response }))
      console.error(e);
    }

    throw new Error(response);
  }

  return yield response.json();
}

function* getLocationSaga() {
  const store = (state) => state.forecast;
  const storeData = yield select(store);
  const { data } = storeData;
  try {
    const forecast = yield call(getForecastByCitySaga, data.location);
    yield put(getForecastByLocationSuccess(forecast));
  } catch (e) {
    console.error(e);
  }
}

function* getGeoPositionSaga() {
  try {
    const position = yield getPosition();
    const response = yield put(getGeoPositionSuccess(position));
    const weatherDetailsSelector = yield call(getForecastByGeoPositionSaga, response.data.coords);
    yield put(getForecastByGeoPositionSuccess(weatherDetailsSelector));
  } catch (e) {
    console.error(e);
  }
}

function getPosition(options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function* getForecastByGeoPositionSaga({ latitude, longitude }) {
  return yield call(makeRequest, '&lat=' + latitude + '&lon=' + longitude );
}

function* getForecastByCitySaga(city) {
  return yield call(makeRequest, '&q=' + city);
}
