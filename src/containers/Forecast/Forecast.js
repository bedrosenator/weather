import React, { Component } from 'react';
import SearchForm from 'components/SearchForm';
import ShortForecast from 'components/ShortForecast';
import Error from 'components/Error';

export class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

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
      <div>
        <SearchForm searchText={location} onSubmit={this.onSubmit} />
        {error && <Error error={error} />}
        {weatherDetails && <ShortForecast weatherDetails={weatherDetails} />}
      </div>
    );
  }
}

export default Forecast;
