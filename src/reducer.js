import { combineReducers } from 'redux';
import forecast from 'containers/Forecast/reducer';

const initialState = {};

export default combineReducers({
  forecast,
})