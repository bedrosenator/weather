import { GET_LOCATION, GET_LOCATION_SUCCESS } from './constants';

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