import {
  GET_FORECAST_BY_LOCATION_SUCCESS,
  GET_LOCATION,
  GET_LOCATION_SUCCESS,
  GET_GEO_POSITION,
  GET_GEO_POSITION_SUCCESS,
  GET_FORECAST_BY_GEO_POSITION,
  GET_FORECAST_BY_GEO_POSITION_SUCCESS, GET_FORECAST_BY_GEO_POSITION_ERROR, GET_LOCATION_ERROR,
} from './constants';

export function getLocation(location) {
  return {
    type: GET_LOCATION,
    data: location,
  }
}

export function getLocationSuccess(data) {
  return {
    type: GET_LOCATION_SUCCESS,
    data: data,
  }
}

export function getForecastByLocationSuccess(data) {
  return {
    type: GET_FORECAST_BY_LOCATION_SUCCESS,
    data: data,
  }
}

export function getGeoPosition(position) {
  return {
    type: GET_GEO_POSITION,
  }
}

export function getGeoPositionSuccess(position) {
  return {
    type: GET_GEO_POSITION_SUCCESS,
    data: position,
  }
}

export function getForecastByGeoPosition(position) {
  return {
    type: GET_FORECAST_BY_GEO_POSITION,
  }
}

export function getForecastByGeoPositionSuccess(position) {
  return {
    type: GET_FORECAST_BY_GEO_POSITION_SUCCESS,
    data: position,
  }
}

export function getForecastError(error) {
  return {
    type: GET_LOCATION_ERROR,
    data: error,
  }
}