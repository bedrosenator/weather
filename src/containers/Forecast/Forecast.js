import React, { Component } from 'react';
import SearchForm from 'components/Forecast/SearchForm';
import ShortForecast from 'components/Forecast/ShortForecast';
import Error from 'components/Error';

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
      <React.Fragment>
        <SearchForm searchText={location} onSubmit={this.onSubmit} />
        {error && <Error error={error} />}
        {weatherDetails &&
          <div>
            <ShortForecast weatherDetails={weatherDetails} />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Forecast;
