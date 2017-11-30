import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavLink from './NavLink';
import SignInForm from '../signin/SignInForm';
import Cart from '../cart/Cart';

import cartIcon from '../cart/cart1.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.openCart = this.openCart.bind(this);
  }
  
  openCart(e) {
    e.preventDefault();
    this.props.cartToggle();
  }

  render(){
    const { cartItems, cartIsOpen, cartToggle } = this.props;
    const cart = cartIsOpen ? <Cart /> : '';

    return (
      <div className="nav-list">
        <NavLink to="/about" className="nav-list__item">About</NavLink>
        <NavLink to="/company" className="nav-list__item">Ценности компании</NavLink>
        <NavLink to="/products" className="nav-list__item">Каталог</NavLink>
        <NavLink to="/delivery" className="nav-list__item">Оплата и доставка</NavLink>
        <NavLink to="/contacts" className="nav-list__item">Контакты</NavLink>
        <div className="cart-btn">
          <a href="" className="cart-link" onClick={(e) => this.openCart(e)}>
            <img src={cartIcon} alt="" />
            <div className={'cart-link__counter ' + (cartItems ? '-active' : '')}><div className="cart-link__count">{cartItems}</div></div>
          </a>
        </div>
        {cart}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const { cartItems, cartIsOpen } = state.cart
	return {
    cartItems,
    cartIsOpen
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		cartToggle: () => dispatch({type: 'CART_TOGGLE'}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
