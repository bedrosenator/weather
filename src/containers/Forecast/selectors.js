import { createSelector } from 'reselect';

const weatherDetails = state => state.forecast.data && state.forecast.data.weatherDetails;
const location = state => state.forecast.data && state.forecast.data.location;
const error = state => state.forecast.error;
const forecastStyles = state => state.forecast.data && state.forecast.data.styles;
const weatherDetailsSelector = createSelector(weatherDetails, (weather) => weather);
const locationSelector = createSelector(location, (location) => location);
const errorSelector = createSelector(error, (error) => error);
const forecastStylesSelector = createSelector(forecastStyles, (styles) => styles || {});

const weatherSelector = createSelector(
  weatherDetailsSelector,
  locationSelector,
  errorSelector,
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
  forecastStylesSelector,
}
