import React from 'react';
import PropTypes from 'prop-types';
import styles from './Temperature.module.scss';

function Temperature(props) {
  const { value, unit } = props;

  return (
    <div className={styles.temperature}>
      <div>{value}°</div>
      <div>{unit}</div>
    </div>
  );
}

Temperature.propTypes = {
  value: PropTypes.string,
  unit: PropTypes.string,
};

export default Temperature;