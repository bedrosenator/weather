import React from 'react';
import style from './Error.module.scss';

export default function Error(props) {
  const { error } = props;

  return (
    <div className={style.error}>
      <span>ERROR: </span>
      <span className={style.code}>{error.cod} </span>
      <span className={style.message}>{error.message}</span></div>
  );
}