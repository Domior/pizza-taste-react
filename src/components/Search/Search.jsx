import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/x.svg';

import styles from './Search.module.scss';

const Search = ({ searchValue, handleSearchValue }) => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        placeholder="Найти пиццу..."
        value={searchValue}
        onChange={e => handleSearchValue(e.target.value)}
      />
      {searchValue && (
        <CloseIcon
          className={styles.closeIcon}
          onClick={() => handleSearchValue('')}
        />
      )}
    </div>
  );
};

export default Search;
