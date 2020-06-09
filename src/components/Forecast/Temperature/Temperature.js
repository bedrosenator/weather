import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { convertFromKelvinToCelsius } from 'utils/utils';
import styles from './Temperature.module.scss';

function Temperature(props) {
  const { value, unit, badge } = props;

  return (
    <div className={styles.temperature}>
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
