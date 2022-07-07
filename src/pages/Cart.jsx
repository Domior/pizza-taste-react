import React from 'react';
import { Link } from 'react-router-dom';

// import EmptyCartImg from '../assets/img/empty-cart.png';
import { ReactComponent as TrashIcon } from '../assets/img/trash.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';
import { ReactComponent as ArrowIcon } from '../assets/img/grey-arrow-left.svg';

import { ReactComponent as PlusIcon } from '../assets/img/plus.svg';
import { ReactComponent as MinusIcon } from '../assets/img/minus.svg';
import { ReactComponent as CloseIcon } from '../assets/img/close.svg';

const Cart = () => {
  return (
    <div class="container container--cart">
      <div class="cart">
        <div class="cart__top">
          <h2 class="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div class="cart__clear">
            <TrashIcon />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div>
          <div class="cart__item">
            <div class="cart__item-img">
              <img
                class="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div class="cart__item-info">
              <h3>Пепперони</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div class="cart__item-count">
              <div class="button button--outline button--circle cart__item-count-minus">
                <MinusIcon />
              </div>
              <b>2</b>
              <div class="button button--outline button--circle cart__item-count-plus">
                <PlusIcon />
              </div>
            </div>
            <div class="cart__item-price">
              <b>770 ₴</b>
            </div>
            <div class="cart__item-remove">
              <div class="button button--outline button--circle">
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom-details">
            <span>
              Всего пицц: <b>3 шт.</b>
            </span>
            <span>
              Сумма заказа: <b>900 ₴</b>
            </span>
          </div>
          <div class="cart__bottom-buttons">
            <Link to="/" class="button button--outline button--add go-back-btn">
              <ArrowIcon />
              <span>Вернуться назад</span>
            </Link>
            <div class="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={EmptyCartImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Cart;
