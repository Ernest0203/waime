import React, {Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

export default class SignInForm extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	username: '',
		// 	password: '',
		// 	errors: {}
		// }
		
		//this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	// onChange(e) {
	// 	this.setState({[e.target.name]: e.target.value});
	// }
	closeModal(e) {
		e.preventDefault();
		const popup = document.getElementById('signin-popup');
    popup.classList.remove('signin-popup--show')
    ReactDOM.unmountComponentAtNode(popup)
	}
	onSubmit(e) {
		e.preventDefault();
		const login = e.target.elements[0].value;
		const pass = e.target.elements[1].value;
		window.localStorage.setItem('login', login);
		window.localStorage.setItem('pass', pass);

		if (login === 'admin' && pass === '0203') {
			this.context.router.push('/admin')
			//this.closeModal(e);
		}
		else {
			//browserHistory.push('/skills')
			//this.context.router.push('/')
			//.add.className = 'invalid'
			var inputs = document.getElementsByTagName('input');
			inputs.value = 'none'
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="signin-form">
				<input 
					id="username"
					type="text" 
					name="username" 
					placeholder="Username" 
					//value={this.state.username} 
					//onChange={this.onChange} 
				/>
				<br/>
				<input 
					id="password"
					type="password" 
					name="password" 
					placeholder="Password"
					//value={this.state.password} 
					//onChange={this.onChange} 
				/>
				<br/>
				<button type="submit">LOGIN</button>				
				<button onClick={this.closeModal} >CANCEL</button>				
			</form>
		);
	}
}

SignInForm.contextTypes = {
	router: PropTypes.object.isRequired
}