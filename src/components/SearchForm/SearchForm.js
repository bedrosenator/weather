import React, { useState } from 'react';
import Input from 'components/Input';
import Button from '../Button';
import style from './SearchForm.module.scss';

function SearchForm(props) {
  const { onSubmit } = props;
  const [inputValue, onChangeInput] = useState('');

  const onFormSubmit = () => {
    onSubmit(inputValue);
  }

  return (
    <form className={style.searchForm}>
      <Input value={inputValue} onChange={onChangeInput} />
      <Button onClick={onFormSubmit} />
    </form>
  );
}

export default SearchForm;