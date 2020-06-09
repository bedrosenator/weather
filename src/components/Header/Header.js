import React from 'react';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <h1>Weather in your city</h1>
    </header>
  );
}

export default Header;
