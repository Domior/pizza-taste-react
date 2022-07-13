import React from 'react';

import { ReactComponent as ArrowIcon } from '../assets/img/arrow-top.svg';

const Sort = ({ value, onClickSortType }) => {
  const sortList = [
    { name: 'убыванию популярности', sortProp: 'rating', order: 'desc' },
    { name: 'возрастанию популярности', sortProp: 'rating', order: 'asc' },
    { name: 'убыванию цены', sortProp: 'price', order: 'desc' },
    { name: 'возрастанию цены', sortProp: 'price', order: 'asc' },
    { name: 'алфавиту', sortProp: 'title', order: 'asc' },
  ];

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const handleClickSort = obj => {
    onClickSortType(obj);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировать по:</b>
        <span onClick={handleClick}>{value}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList?.map(item => (
              <li
                key={item.name}
                className={value === item.name ? 'active' : ''}
                onClick={() => handleClickSort(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
