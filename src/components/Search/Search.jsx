import React from 'react';
import debounce from 'lodash.debounce';

import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/x.svg';

import styles from './Search.module.scss';

const Search = ({ handleSearchValue }) => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const debouncedSearch = React.useMemo(
    () =>
      debounce(value => {
        handleSearchValue(value);
      }, 500),
    [handleSearchValue],
  );

  const onChangeInput = e => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const onClickClearInput = () => {
    handleSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        ref={inputRef}
        placeholder="Найти пиццу..."
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <CloseIcon className={styles.closeIcon} onClick={onClickClearInput} />
      )}
    </div>
  );
};

export default Search;
