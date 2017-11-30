import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Order extends Component {
	constructor(props) {
		super(props);
		
		this.makeOrder = this.makeOrder.bind(this)
	}

	makeOrder(e) {
		e.preventDefault();

		const { order, totalPrice } = this.props;
		let formatedOrder = '';
		order.forEach((item) => { formatedOrder = formatedOrder +`${item.name}: ${item.quantity} \n` })

		const { firstName, secondName, thirdName, city, depot, email, phone } = document.forms.orderForm;
		const data = {
			имя: `${firstName.value.toUpperCase()} ${secondName.value.toUpperCase()} ${thirdName.value.toUpperCase()}`,
			город: city.value,
			отделение: depot.value,
			email: email.value,
			телефон: phone.value,
			заказ: formatedOrder,
			'общая стоимость': totalPrice,
		};
		axios.post('https://formspree.io/ernest2332@gmail.com', data)
			.then((res) => {console.log(res, 'RES')})
			.catch((err) => {console.log(err, 'ERR')})
	}
	
	render() {
		return (
			<div className="order">
				<h4 className="order__title">Оформление заказа</h4>
				<form name="orderForm" onSubmit={(e) => this.makeOrder(e)}>
					<input type="text" name="firstName" placeholder="Имя" required /> <br/>
					<input type="text" name="secondName" placeholder="Фамилия" required /> <br/>
					<input type="text" name="thirdName" placeholder="Отчество" required /> <br/>
					<input type="text" name="city" placeholder="Город" required /> <br/>
					<input type="text" name="depot" placeholder="Отделение новой почты" required /> <br/>
					<input type="email" name="email" placeholder="email" required /> <br/>
					<input type="text" name="phone" placeholder="Телефон" required /> <br/>
					<button type="submit" className="btn-link btn-submit">Оформить</button>
				</form>
			</div>
		);
	}
}

export default Order;