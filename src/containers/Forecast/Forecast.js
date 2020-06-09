import React, { Component } from 'react';
import SearchForm from 'components/Forecast/SearchForm';
import ShortForecast from 'components/Forecast/ShortForecast';
import Error from 'components/Error';
import styles from './Forecast.module.scss';

export class Forecast extends Component {
  onSubmit = (value) => {
    const { getLocation } = this.props;
    getLocation(value);
  }

  componentDidMount() {
    this.props.getGeoPosition()
  }

  render() {
    const { weatherDetails, location, error } = this.props;

    return (
      <div className={styles.forecastBackground}>
        <SearchForm searchText={location} onSubmit={this.onSubmit} />
        {error && <Error error={error} />}
        {weatherDetails && <ShortForecast weatherDetails={weatherDetails} />}
      </div>
    );
  }
}

export default Forecast;
