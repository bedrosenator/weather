import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Temperature.module.scss';

function Temperature(props) {
  const { value, unit, badge } = props;

  const convertFromKelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  }

  return (
    <div className={classnames(styles.temperature)}>
      <div className={classnames({ [styles.badge]: badge })}>
        <span>{convertFromKelvinToCelsius(value)} °</span>
        <span>{unit}</span>
      </div>
    </div>
  );
}

Temperature.defaultProps = {
  unit: 'C'
}

Temperature.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
  badge: PropTypes.bool,
};

export default Temperature;