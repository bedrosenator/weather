import React, { Component } from 'react';
import SearchForm from 'components/SearchForm';

export class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  onSubmit(value) {
    console.log('Forecast = ', value);
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Forecast;