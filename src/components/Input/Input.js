import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

class Input extends React.Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input className={styles.input} type="text" defaultValue={this.props.value} onChange={this.handleChange} />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
