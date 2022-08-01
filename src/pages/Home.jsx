import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';

import { API } from '../constants/api';

const HomePage = ({ searchValue }) => {
  const categoryId = useSelector(state => state.filter.categoryId);
  const selectedSort = useSelector(state => state.filter.sort);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const sort = selectedSort.sortProp;
    const order = selectedSort.order;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    try {
      fetch(`${API}/pizzas?${`sortBy=${sort}&order=${order}`}${category}${search}`)
        .then(res => res.json())
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, [categoryId, selectedSort, searchValue]);

  const skeletons = [...new Array(9)].map((_, i) => <Skeleton key={i} />);
  const items = pizzas?.map(pizza => <Pizza key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : items}</div>
    </div>
  );
};

export default HomePage;
