import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from './Search';

import logo from '../assets/img/pizza-logo.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';

const Header = ({ handleSearchValue }) => {
  const { items, totalPrice } = useSelector(state => state.cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>Pizza Taste</h1>
            <p>Самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Search handleSearchValue={handleSearchValue} />
        <div className="header__cart">
          <Link to="cart" className="button button--cart">
            <span>{totalPrice} ₴</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>{items.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
