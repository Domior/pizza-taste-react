import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

import { ReactComponent as PlusIcon } from '../assets/img/plus.svg';
import { ReactComponent as MinusIcon } from '../assets/img/minus.svg';
import { ReactComponent as CloseIcon } from '../assets/img/close.svg';

const CartItem = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Remove?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          className="button button--outline button--circle cart__item-count-minus"
          onClick={onClickMinus}
        >
          <MinusIcon />
        </div>
        <b>{count}</b>
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={onClickPlus}
        >
          <PlusIcon />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₴</b>
      </div>
      <div className="cart__item-remove" onClick={onClickRemove}>
        <div className="button button--outline button--circle">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
