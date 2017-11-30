import React, {Component} from 'react';

class componentName extends Component {
	static onEnter(nextState, replace) {
		const login = window.localStorage.getItem('login')
		const pass = window.localStorage.getItem('pass')
		if (login !== 'admin' && pass !== '0203') {
			replace('/')
		}
	}

	render() {
		return (
			<div>
				Admin
			</div>
		);
	}
}

export default componentName;