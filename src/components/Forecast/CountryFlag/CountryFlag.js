import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'config';

export default function CountryFlag(props) {
  const { countryCode } = props;

  return (
    <img alt={countryCode} src={config.api.url.flags + countryCode.toLowerCase() + '.png'} />
  );
}

CountryFlag.defaultProps = {
  countryCode: '',
};

CountryFlag.propTyper = {
  countryCode: PropTypes.string.isRequired,
}
