import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchDataFromStorage } from './PortfolioActions.js';
import DatabaseController from '../database/databaseController';
import Old from './PortfolioOld.js';

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		this.database = new DatabaseController();
		this.database.connect();
		this.fetchData();
		this.database.getDataFromStorage()
	};

	fetchData() {
		this.database.getDataFromServer((data) => {
			this.props.fetchData(data)
		});
	};

	render() {
		return (
			<section className="portfolio">
				<h2 className="portfolio__title">Pet projects</h2>
				<Old data={this.props.old}/>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	const { old } = state.portfolio.projects
	return {
		old,
	}
};

function mapDispatchToProps(dispatch) {
	return {
		fetchData: (data) => dispatch({type: 'FETCH_DATA', data}),
		//fetchDataFromStorage: (data) => dispatch({type: 'FETCH_DATA_FROM_STORAGE', data}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)