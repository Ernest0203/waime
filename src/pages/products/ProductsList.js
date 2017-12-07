import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatabaseController from '../../database/databaseController.js';

import ProductItem from './ProductItem';

class ProductsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			load: false
		}

		this.popupClose = this.popupClose.bind(this);
	}

	componentDidMount() {
		if (!this.props.firstLoad) return;
		this.database = new DatabaseController();
		this.database.connect();
		return this.database.getDataFromServer().then((data) => {
			this.props.fetchData(data.val());
		})
	}

	popupClose(e) {
		if (e.target === this.close) {
			e.preventDefault();
			e.stopPropagation();
		} else if (e.target !== this.wrapper) return;
		this.props.popupClose();
	}
	
  render(){
		const { data, popupIsOpen, addToCart, cartData, popupOpen, popupItem } = this.props;

		document.body.style.overflow = popupIsOpen ? 'hidden': '';

		const descPopup = popupIsOpen 
		? <div className="desc-popup" onClick={(e) => this.popupClose(e)} ref={(wrapper) => {this.wrapper = wrapper}}>
				<div className="popup">
					<div className="popup__image"><img src={popupItem.image} /></div>
					<h3 className="popup__title">{popupItem.name}</h3>
					<p className="popup__desc">{popupItem.description}</p>
					<a className="close-btn" href="" onClick={(e) => this.popupClose(e)} ref={(close) => {this.close = close}} >&#10006;</a>
				</div>
			</div> 
		: '';
		
		const productItems = data.map((item, i) => {
			return (
				<ProductItem
					key={`product ${i}`}
					item={item}
					addToCart={addToCart}
					cartData={cartData}
					popupIsOpen={popupIsOpen}
					popupOpen={popupOpen}
					popupItem={popupItem}
			 	/>
			)
		});

		let content = data.length
			? (<ul className="products-list">
					{productItems}
				 	{descPopup}
				 </ul>)
			: <div>Loading...</div>;

    return (
			<div>{content}</div>
    );
  }
}

const mapStateToProps = (state) => {
	const { data, popupIsOpen, popupItem, firstLoad } = state.products;
	const cartData = state.cart.data;
	return {
		firstLoad,
		data,
		popupIsOpen,
		cartData,
		popupItem,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (args) => {
			dispatch({type: 'FETCH_DATA_SUCCES', data: args.spices})
		},
		addToCart: (args) => {
			dispatch({type: 'ADD_TO_CART', data: args});
			dispatch({type: 'CART_ITEMS_COUNT'});
		},
		popupOpen: (item) => {
			dispatch({type: 'POPUP_ITEM', data: item});
			dispatch({type: 'POPUP_TOGGLE'});
		},
		popupClose: () => dispatch({type: 'POPUP_TOGGLE'}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)