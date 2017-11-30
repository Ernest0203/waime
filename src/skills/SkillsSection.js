import React, { Component } from 'react';

class SkillsSection extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, section, addSkill, removeSkill, editSkill } = this.props;
		const editTitle = this.props.title.replace(/\s+/g,'');
		let listItem = {};

		if (!section) {
			listItem = <li className="skills__list-item--no-data">There are no skills added yet!</li>
		}
		else {
			listItem = 
				Object.keys(section).map((item) => {
					return (
						<li className="skills__list-item" key={item}>
							<p 
								contentEditable="true" 
								onBlur={(e) => editSkill(e, editTitle, item)}
								onKeyDown={(e) => editSkill(e, editTitle, item)}
							>
								{section[item]}
							</p>
							<a href="" className="btn-remove" onClick={(e) => removeSkill(e, editTitle, item)}>&times;</a>
						</li>
					)
				})
		}

		return (
			<li className="skills__group-item">
				<h4 className="skills__heading">{title}</h4>
				<ul className="skills__list">
					{listItem}
				</ul>
				<form name={editTitle} className="skills__add-form" onSubmit={addSkill}>
					<input type="text" className="skills__add-field"/>
					<button type="submit" className="skills__add-btn btn-add">Add Skill</button>
				</form>
			</li>
		);
	}
}

export default SkillsSection;