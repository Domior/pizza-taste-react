import React from 'react';

import { ReactComponent as ArrowIcon } from '../assets/img/arrow-top.svg';

const Sort = () => {
  const sortList = ['популярности', 'цене', 'алфавиту'];

  const [open, setOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState(sortList[0]);

  const handleClick = () => setOpen(!open);

  const handleClickSort = title => {
    setSelectedSort(title);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировка по:</b>
        <span onClick={handleClick}>{selectedSort}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList?.map(title => (
              <li
                key={title}
                className={selectedSort === title ? 'active' : ''}
                onClick={() => handleClickSort(title)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
