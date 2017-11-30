import React, {Component} from 'react';
import { connect } from 'react-redux';

class Delivery extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<section className="delivery">
				<h2 className="delivery__title">Оплата и доставка</h2>
				<div className="delivery__text" >

				</div>
			</section>
		);
	}
};

export default Delivery;
