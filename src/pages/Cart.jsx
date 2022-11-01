import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

import { clearCart } from '../redux/slices/cartSlice';

import EmptyCartImg from '../assets/img/empty-cart.png';
import { ReactComponent as TrashIcon } from '../assets/img/trash.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';
import { ReactComponent as ArrowIcon } from '../assets/img/grey-arrow-left.svg';

const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalPrice, totalItems } = useSelector(state => state.cart);

  const onClickClear = () => {
    if (window.confirm('Clear cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="container container--cart">
      {items.length > 0 ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              Корзина
            </h2>
            <div className="cart__clear" onClick={onClickClear}>
              <TrashIcon />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div>
            {items.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalItems} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₴</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <ArrowIcon />
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>Корзина пустая</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={EmptyCartImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
