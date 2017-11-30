import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from './Order.js';

class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popupContent: 'cart',
		}
		
		this.closeCart = this.closeCart.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.contentSwitch = this.contentSwitch.bind(this);
	}

	closeCart(e) {
		if (e.target === this.close) {
			e.preventDefault();
			e.stopPropagation();
		} else if (e.target !== this.wrapper) return;
		document.body.style.overflow = '';
    this.props.cartToggle();
	}
	
	removeItem(e, item) {
		e.preventDefault();
		this.props.removeItem(item);
	}

	contentSwitch(e) {
		e.preventDefault();
		this.setState({ popupContent: 'order' });
	}
	
  render(){
		const { cartIsOpen, cartToggle, data } = this.props;

		if (cartIsOpen) document.body.style.overflow = 'hidden';

		const cartItems = data.length
			?	data.map((item, i) => {
					return (
						<li key={`cartItem ${i}`} className="cart-list__item">
							<div className="col">
								<img src={item.image} alt="" className="item-image"/>
							</div>
							<div className="col">
								<h4 className="item-name">{item.name}</h4>
								<p>Количество: {item.quantity}</p>
								<p>Цена: {item.price} Грн</p>
								<a className="item-remove" href="" title="Убрать из корзины" onClick={(e) => this.removeItem(e, item.name)}>Убрать</a>
							</div>
						</li>
					)
				})
			: <li className="cart-list__item">
					<h3 className="item-name -empty">Корзина пуста!</h3>
				</li>

		const orderBtn = data.length ? <a className="btn-link cart__btn-order" href="" onClick={(e) => this.contentSwitch(e)}>Оформить заказ</a> : ''

		const totalPrice = data.reduce((total, item) => {
			if (item.quantity > 1) return total + (item.price * item.quantity);
			return total + item.price;
		}, 0);

		let content = this.state.popupContent === 'cart'
			? (<div className="cart">
					<ul className="cart-list">
						{cartItems}
					</ul>
					<p className="cart__total-price">Сумма: {totalPrice} ГРН</p>
					<a className="close-btn" href="" onClick={(e) => this.closeCart(e)} ref={(close) => this.close = close} >&#10006;</a>
					{orderBtn}
					</div>)
			: <Order order={data} totalPrice={totalPrice} />

    return (
      <div className='cart-wrapper' onClick={(e) => this.closeCart(e)} ref={(wrapper) => {this.wrapper = wrapper}} >
					{content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const { cartItems, cartIsOpen, data } = state.cart
	return {
    cartItems,
		cartIsOpen,
		data,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		cartToggle: () => dispatch({ type: 'CART_TOGGLE' }),
		removeItem: (item) => {
			dispatch({ type: 'REMOVE_ITEM', item: item});
			dispatch({type: 'CART_ITEMS_COUNT'});
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)