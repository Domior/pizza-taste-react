import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';

const HomePage = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [selectedSort, setSelectedSort] = React.useState({
    name: 'убыванию популярности',
    sortProp: 'rating',
    order: 'desc',
  });

  React.useEffect(() => {
    setIsLoading(true);
    try {
      fetch(
        `https://62c5bb25a361f725128d050a.mockapi.io/pizzas?${`sortBy=${selectedSort.sortProp}&order=${selectedSort.order}`}${
          categoryId > 0 ? `&category=${categoryId}` : ''
        }`,
      )
        .then(res => res.json())
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, [categoryId, selectedSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={id => setCategoryId(id)} />
        <Sort
          value={selectedSort.name}
          onClickSortType={obj => setSelectedSort(obj)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
          : pizzas?.map(pizza => <Pizza key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default HomePage;
