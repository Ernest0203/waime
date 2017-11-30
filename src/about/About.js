import React, {Component} from 'react';
import { connect } from 'react-redux';

class About extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<section className="about">
				<h2 className="about__greet">Видос</h2>
				<div className="about__text" >
					<video preload="auto" loop autoPlay="autoplay" muted="muted" >
						<source src="https://bangbangeducation.ru/content/courses/web-development/preview.mp4" />
					</video>
				</div>
			</section>
		);
	}
};

export default About;
