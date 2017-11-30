import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import routes from './app/routes.js'

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={ hashHistory }  routes={ routes } />
	</Provider>, document.getElementById('app')
);