import { connect } from 'react-redux';
import Forecast from './Forecast';
import { getGeoPosition, getLocation } from 'containers/Forecast/actions';
import { weatherSelector } from './selectors';

function mapStateToProps(state) {
  return {
    ...weatherSelector(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: (data) => dispatch(getLocation(data)),
    getGeoPosition: (data) => dispatch(getGeoPosition(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
