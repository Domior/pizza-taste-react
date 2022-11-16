import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchPizzas, PizzaItem } from '../redux/slices/pizzasSlice';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { searchValue, categoryId, sort } = useSelector(
    (state: RootState) => state.filter,
  );
  const { pizzas, status } = useSelector((state: RootState) => state.pizzas);

  const getPizzas = () => {
    const sortBy = sort.sortProp;
    const order = sort.order;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ sortBy, order, category, search }));
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, searchValue]);

  const skeletons = [...new Array(9)].map((_, i) => <Skeleton key={i} />);
  const items = pizzas?.map((pizza: PizzaItem) => (
    <Pizza key={pizza.id} {...pizza} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2>Something went wrong</h2>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletons : items}
        </div>
      )}
    </div>
  );
};

export default HomePage;
