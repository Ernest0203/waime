import React, {Component} from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				{/* <h2 className="footer__title">Контакты:</h2> */}
				<div className="social">
					<div>Email: <span>ernest2332@gmail.com</span></div>
					<div><span></span>099 541 3694</div>
					{/* <div className="email">
						<span>MAIL:</span>
						<a href="mailto:ernest2332@gmail.com">ernest2332@gmail.com</a>
					</div>
					<div className="email">
						<span>MAIL:</span>
						<a href="mailto:ernest2332@gmail.com">ernest2332@gmail.com</a>
					</div>
					<div className="email">
						<span>MAIL:</span>
						<a href="mailto:ernest2332@gmail.com">ernest2332@gmail.com</a>
					</div> */}
				</div>
			</footer>
		);
	}
}

