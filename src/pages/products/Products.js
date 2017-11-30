import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsList from './ProductsList';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	
  render(){
    return (
      <div className="products">
				<h2 className="products__title content-wrapper__title">Каталог</h2>
				<ProductsList />
      </div>
    );
  }
}

export default Products;