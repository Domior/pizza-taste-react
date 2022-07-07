import React from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';

const HomePage = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      fetch('https://62c5bb25a361f725128d050a.mockapi.io/pizzas')
        .then(res => res.json())
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
              : pizzas?.map(pizza => <Pizza key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
