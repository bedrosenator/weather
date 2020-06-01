import { createSelector } from 'reselect';

const weatherDetails = state => state.forecast.data && state.forecast.data.weatherDetails;
const location = state => state.forecast.data && state.forecast.data.location;
const error = state => state.forecast.error;
const weatherDetailsSelector = createSelector(weatherDetails, (weather) => weather);
const locationSelector = createSelector(location, (location) => location);
const errorSelector = createSelector(error, (error) => error);

const weatherSelector = createSelector(
  state => state.forecast.data.weatherDetails,
  state => state.forecast.data.location,
  state => state.forecast.error,
  (weatherDetails, location, error) => {
    return {
      weatherDetails,
      location,
      error,
    }
  }
)

export {
  weatherDetailsSelector,
  locationSelector,
  errorSelector,
  weatherSelector,
}