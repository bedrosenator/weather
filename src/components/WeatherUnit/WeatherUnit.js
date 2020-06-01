import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherUnit.scss';

function WeatherUnit(props) {
  const { value, unit } = props;

  return (
    <div className={styles.weatherUnit}>
      {value} {unit}
    </div>
  );
}

WeatherUnit.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
};

export default WeatherUnit;
