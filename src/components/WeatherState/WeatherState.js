import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'config';

function WeatherState(props) {
  const { imgSrc, status } = props;

  return (
    <React.Fragment>
      <img alt={status} src={config.api.url.icons + imgSrc + '.png'} width={50} height={50} />
    </React.Fragment>
  );
}

WeatherState.defaultProps = {
  status: '',
  imgSrc: '',
};

WeatherState.propTypes = {
  status: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

export default WeatherState;