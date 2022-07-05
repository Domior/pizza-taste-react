import React from 'react';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'С грибами'];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories?.map((category, i) => (
          <li
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={() => setActiveIndex(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
