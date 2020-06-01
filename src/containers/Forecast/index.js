import { connect } from 'react-redux';
import Forecast from './Forecast';
import { getGeoPosition, getLocation } from 'containers/Forecast/actions';
import {createSelector} from 'reselect';
const location = state => state.forecast.data && state.forecast.data.location;
const weatherDetails = state => state.forecast.data && state.forecast.data.weatherDetails;
const error = state => state.forecast.error;
const weatherDetailsSelector = createSelector(weatherDetails, (weather) => weather);
const locationSelector = createSelector(location, (location) => location);
const errorSelector = createSelector(error, (error) => error);

function mapStateToProps(state) {
  return {
    error: errorSelector(state),
    weatherDetails: weatherDetailsSelector(state),
    location: locationSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: (data) => dispatch(getLocation(data)),
    getGeoPosition: (data) => dispatch(getGeoPosition(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps,)(Forecast);