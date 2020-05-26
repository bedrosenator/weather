import React from 'react';
import PropTypes from 'prop-types';

function WeatherState(props) {
  const { imgSrc, status, type } = props;

  return (
    <React.Fragment>
      <img alt={status} src={imgSrc} width={50} height={50} />
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