import React, { Component } from 'react';
import { connect } from 'react-redux';

import Company from './Company.js';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	
  render(){
    return (
      <section className="company">
				<h2 className="company__title">Ценности компании</h2>
				<p className="company__text" >Ценности еба</p>
			</section>
    );
  }
}

export default Products;