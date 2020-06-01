import React, { useState } from 'react';
import Input from 'components/Input';
import Button from '../Button';
import style from './SearchForm.module.scss';

function SearchForm(props) {
  const { onSubmit, searchText } = props;
  const [inputValue, onChangeInput] = useState(searchText);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return null;
    }

    onSubmit(inputValue);
  }

  return (
    <form onSubmit={onFormSubmit} className={style.searchForm}>
      <Input value={searchText} onChange={onChangeInput} />
      <Button type="submit" />
    </form>
  );
}

export default SearchForm;
