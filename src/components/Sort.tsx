import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../redux/store';
import { setSortType, SortItem } from '../redux/slices/filterSlice';

import { ReactComponent as ArrowIcon } from '../assets/img/arrow-top.svg';

const sortList: SortItem[] = [
  { name: 'убыванию популярности', sortProp: 'rating', order: 'desc' },
  { name: 'возрастанию популярности', sortProp: 'rating', order: 'asc' },
  { name: 'убыванию цены', sortProp: 'price', order: 'desc' },
  { name: 'возрастанию цены', sortProp: 'price', order: 'asc' },
  { name: 'алфавиту', sortProp: 'title', order: 'asc' },
];

const Sort: React.FC = () => {
  const selectedSort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const onClickListItem = (item: SortItem) => {
    dispatch(setSortType(item));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !event.composedPath().includes(sortRef.current) &&
        open === true
      ) {
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
                onClick={() => onClickListItem(item)}
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
