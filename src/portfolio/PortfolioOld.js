import React, {Component} from 'react';

class Portfolio extends Component {

	render() {
		const data = this.props.data
		let listItem = {};

		if (!data) {
			listItem = <li className="portfolio-old__list-item--no-data">There are no projects added yet!</li>
		}
		else if (Object.keys(data).length === 0) {
			return <div className="empty">Loading...</div>
		}
		else {
			listItem = 
				Object.keys(data).map(item => {
					const { title, sources, preview, image } = data[item]
					return (
						<li className="portfolio-old__list-item">
							<img className="image" src={image} alt=""/>
							<div className="content">
								<h5 className="title">{title}</h5>
								<h5 className="technologies">techs</h5>
								<div className="btn-group">
									<a href={sources} target="_blank" className="btn-link">Sources</a>
									<a href={preview} target="_blank" className="btn-link">Preview</a>
								</div>
							</div>
						</li>
					)
				})
		}

		return (
			<article className="portfolio-old">
				<h3 className="portfolio-old__title">Webpages (old)</h3>
				<ul className="portfolio-old__list">
					{listItem}
				</ul>
			</article>
		);
	}
}

export default Portfolio;