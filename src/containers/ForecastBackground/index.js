import ForecastBackground from './ForecastBackground';
import { connect } from 'react-redux';
import { weatherDetailsSelector, forecastStylesSelector } from 'containers/Forecast/selectors';

function mapStateToProps(state) {
  return {
    weatherDetails: weatherDetailsSelector(state),
    forecastStyles: forecastStylesSelector(state),
  }
}

export default connect(mapStateToProps)(ForecastBackground);
