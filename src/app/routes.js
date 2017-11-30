import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import About from '../about/About.js';
import Products from '../pages/products/Products.js';
import Company from '../pages/company/Company.js';
import Delivery from '../pages/delivery/Delivery.js';
import Contacts from '../pages/contacts/Contacts.js';

//import Skills from '../skills/Skills'
//import Portfolio from '../portfolio/Portfolio'
//import SignInPage from '../signin/SignInPage'
//import Admin from '../signin/Admin.js'

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="/about" component={About} />
		<Route path="/products" component={Products} />
		<Route path="/about" component={About} />
		<Route path="/company" component={Company} />
		<Route path="/delivery" component={Delivery} />
		<Route path="/contacts" component={Contacts} />
	</Route>
)
