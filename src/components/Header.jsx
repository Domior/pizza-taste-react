import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/pizza-logo.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';

const Header = () => {
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
        <div className="header__cart">
          <Link to="cart" className="button button--cart">
            <span>520 ₴</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
