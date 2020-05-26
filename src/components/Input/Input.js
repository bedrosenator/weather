import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export function Input(props) {
  const { onChange } = props;
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    onChange(inputValue);
  })

  return (
    <input className={styles.input} value={inputValue} onChange={handleOnChange} />
  );
}

Input.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;