import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

// import EmptyCartImg from '../assets/img/empty-cart.png';
import { ReactComponent as TrashIcon } from '../assets/img/trash.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';
import { ReactComponent as ArrowIcon } from '../assets/img/grey-arrow-left.svg';

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div className="cart__clear">
            <TrashIcon />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />  
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>3 шт.</b>
            </span>
            <span>
              Сумма заказа: <b>900 ₴</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <ArrowIcon />
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={EmptyCartImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Cart;
