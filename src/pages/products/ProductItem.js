import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quantity: 1
		}

		this.addToCart = this.addToCart.bind(this);
		this.chooseQuantity = this.chooseQuantity.bind(this);
		this.openPopup = this.openPopup.bind(this);
	}

	addToCart(e, args) {
		e.stopPropagation();
		e.preventDefault();
		this.props.addToCart(args)
	}

	chooseQuantity(e) {
		e.stopPropagation();
		e.preventDefault();
		const { quantity } = this.state;
		if (e.target === this.minus && quantity === 1) return;
		this.setState({
			quantity: e.target === this.plus ? quantity + 1 : quantity - 1 
		})
	}

	openPopup(e, item) {
		this.props.popupOpen(item);
	}
	
  render(){
		const { name, price, description, image } = this.props.item;
		const { popupItem } = this.props;
		const cartItem ={
			name,
			price,
			image,
			quantity: this.state.quantity,
		}
				
    return (
      <li className="product-item" /*onClick={(e) => this.openPopup(e, { name, description, image })}*/>
				<div className="overlay">
					<a href="" className="overlay__btn btn-link">Описание</a>
				</div>
				<div className="product-item__img">
					<img src={image} />
				</div>
				<div className="product-item__desc">
					<h4 className="product-item__title">{name}</h4>
					<div className="order-options">
						<span className="order-options__quantity">
							Количество: 
							<span className="quantity-counter">
								<span className="quantity-counter__sign minus" ref={(minus) => this.minus = minus} onClick={(e) => this.chooseQuantity(e)}>&ndash;</span>
								<span className="quantity-counter__count">{this.state.quantity}</span>
								<span className="quantity-counter__sign plus" ref={(plus) => this.plus = plus} onClick={(e) => this.chooseQuantity(e)}>+</span>
							</span>
						</span>
						<span className="order-options__price">{`${price} Грн`}</span>
					</div>
					<a href="#" className="btn-buy btn-link"  onClick={(e) => this.addToCart(e, cartItem)} ref={(buy) => this.buy = buy}>Купить</a>
				</div>
      </li>
    );
  }
}

export default ProductItem;