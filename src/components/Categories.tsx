import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

const Categories: React.FC = () => {
  const categoryId = useSelector((state: any) => state.filter.categoryId);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'С грибами'];

  return (
    <div className="categories">
      <ul>
        {categories?.map((category, i) => (
          <li
            key={i}
            className={categoryId === i ? 'active' : ''}
            onClick={() => dispatch(setCategoryId(i))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
