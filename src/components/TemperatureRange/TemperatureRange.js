import React from 'react';
import PropTypes from 'prop-types';
import Temperature from 'components/Temperature';
import styles from './TemperatureRange.module.scss';

function TemperatureRange(props) {
  const { min, max } = props;

  return (
    <div className={styles.temperatureRange}>
      temperature from <Temperature value={min} /> to <Temperature value={max} />
    </div>
  );
}

TemperatureRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default TemperatureRange;