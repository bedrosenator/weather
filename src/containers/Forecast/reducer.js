import {
  GET_FORECAST_BY_GEO_POSITION_SUCCESS,
  GET_FORECAST_BY_LOCATION_SUCCESS,
  GET_GEO_POSITION_SUCCESS,
  GET_LOCATION,
  GET_LOCATION_ERROR,
  GET_LOCATION_SUCCESS
} from './constants';

const initialState = {
  data: {
    location: '',
    locations: [],
    weatherDetails: null,
    coords: '',
  },
  error: null,
  loading: false,
};

function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          location: action.data,
        },
        error: null,
      }
    case GET_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.data.error,
      }
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          locations: action.data,
        },
        error: null,
      }
    case GET_FORECAST_BY_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          weatherDetails: action.data,
        },
        error: null,
      }
    case GET_FORECAST_BY_GEO_POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          location: action.data.name,
          weatherDetails: action.data,
        },
        error: null,
      }
    case GET_GEO_POSITION_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          coords: action.data.coords,
        },
        error: null,
      }
    default:
      return state;
  }
}

export default forecastReducer;