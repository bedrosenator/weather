import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonText, onClick, type } = props;

  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
}

Button.defaultProps = {
  buttonText: 'Submit',
  type: 'button',
  onClick: function () {
  }
};

Button.propTypes = {
  buttonText: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;