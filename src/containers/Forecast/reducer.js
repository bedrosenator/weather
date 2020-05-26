import {GET_LOCATION, GET_LOCATION_SUCCESS} from './constants';

const initialState = {
  data: {
    location: '',
    locations: [],
  },
  loading: false,
};

function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {

      }
  }

  return state;
}

export default forecastReducer;