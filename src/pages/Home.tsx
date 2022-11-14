import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';

import { fetchPizzas } from '../redux/slices/pizzasSlice';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const { searchValue, categoryId, sort } = useSelector(
    (state: any) => state.filter,
  );
  const { pizzas, status } = useSelector((state: any) => state.pizzas);

  const getPizzas = () => {
    const sortBy = sort.sortProp;
    const order = sort.order;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      //@ts-ignore
      fetchPizzas({ sortBy, order, category, search }),
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, searchValue]);

  const skeletons = [...new Array(9)].map((_, i) => <Skeleton key={i} />);
  const items = pizzas?.map((pizza: any) => <Pizza key={pizza.id} {...pizza} />);

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
