import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'config';

function WeatherStateIcon(props) {
  const { imgSrc, status } = props;

  return (
    <React.Fragment>
      <img alt={status} src={config.api.url.icons + imgSrc + '.png'} width={50} height={50} />
    </React.Fragment>
  );
}

WeatherStateIcon.defaultProps = {
  status: '',
  imgSrc: '',
};

WeatherStateIcon.propTypes = {
  status: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

export default WeatherStateIcon;