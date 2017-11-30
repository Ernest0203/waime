import React, {Component} from 'react';
import { connect } from 'react-redux';

import SkillsSection from './SkillsSection.js';
import DatabaseController from '../database/databaseController';

class Skills extends Component {
	constructor(props) {
		super(props);

		this.addSkill = this.addSkill.bind(this);
		this.removeSkill = this.removeSkill.bind(this);
		this.editSkill = this.editSkill.bind(this);
	};
	
	componentWillMount() {
		this.database = new DatabaseController();
		this.database.connect();
		this.fetchData();
	};

	fetchData() {
		this.database.getDataFromServer((data) => {
			this.props.fetchData(data)
		});
	};

	addSkill(e) {
		e.preventDefault();
		let title = e.target.name;
		let item = e.target.elements[0].value;
		if (!item) return;
		this.database.addItem(title, item);
		this.fetchData();
		e.target.elements[0].value = '';
	};

	removeSkill(e, section, item) {
		e.preventDefault();
		this.database.removeItem(section, item);
		this.fetchData();
	};

	editSkill(e, section, item) {
		let newItem = e.target.innerText;
		if (e.which == 13) {
			e.preventDefault();
		};
		if (!newItem) {
			e.target.classList.add('empty')
			e.target.focus()
			return false
		} 
		else { 
			e.target.classList.remove('empty') 
		}
		this.database.editItem(section, item, newItem);
	};

	render() {
		return (
			<section className="skills">
				<h2 className="skills__title">Skills</h2>
				<ul className="skills__group">
					<SkillsSection
						title="layout"
						section={this.props.layout}
						addSkill={this.addSkill}
						removeSkill={this.removeSkill}
						editSkill={this.editSkill}
					/>
					<SkillsSection
						title="ecmascript"
						section={this.props.ecmascript}
						addSkill={this.addSkill}
						removeSkill={this.removeSkill}
						editSkill={this.editSkill}
					/>
					<SkillsSection
						title="learning in progress"
						section={this.props.learninginprogress}
						addSkill={this.addSkill}
						removeSkill={this.removeSkill}
						editSkill={this.editSkill}
					/>
				</ul>
			</section>
		);
	};
};

const mapStateToProps = (state) => {
	const { layout, ecmascript, learninginprogress } = state.skills.skillsData
	return {
		layout,
		ecmascript,
		learninginprogress
	}
};

function mapDispatchToProps(dispatch) {
	return {
		fetchData: (data) => dispatch({type: 'FETCH_DATA', data}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills)