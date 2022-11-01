import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSortType } from '../redux/slices/filterSlice';

import { ReactComponent as ArrowIcon } from '../assets/img/arrow-top.svg';

const Sort = () => {
  const sortList = [
    { name: 'убыванию популярности', sortProp: 'rating', order: 'desc' },
    { name: 'возрастанию популярности', sortProp: 'rating', order: 'asc' },
    { name: 'убыванию цены', sortProp: 'price', order: 'desc' },
    { name: 'возрастанию цены', sortProp: 'price', order: 'asc' },
    { name: 'алфавиту', sortProp: 'title', order: 'asc' },
  ];

  const selectedSort = useSelector(state => state.filter.sort);
  const dispatch = useDispatch();

  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  React.useEffect(() => {
    const handleClickOutside = event => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current) && open === true) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировать по:</b>
        <span onClick={handleClick}>{selectedSort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList?.map(item => (
              <li
                key={item.name}
                className={selectedSort.name === item.name ? 'active' : ''}
                onClick={() => {
                  dispatch(setSortType(item));
                  setOpen(false);
                }}
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
