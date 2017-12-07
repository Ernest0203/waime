import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import skills from '../skills/SkillsReducer.js';
import about from '../about/AboutReducer.js';
import cart from '../cart/CartReducer.js';
import products from '../pages/products/ProductsReducer.js';

const rootReducer = combineReducers({
	about,
	skills,
	cart,
	products,
})

export default function store(initialState) {
	const store = createStore(rootReducer, applyMiddleware(thunk), initialState);
	window.dispatch = store.dispatch;
	return store;
}
