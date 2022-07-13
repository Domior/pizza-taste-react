import React from 'react';

const Categories = ({ value, onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'С грибами'];

  return (
    <div className="categories">
      <ul>
        {categories?.map((category, i) => (
          <li
            key={i}
            className={value === i ? 'active' : ''}
            onClick={() => onClickCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
