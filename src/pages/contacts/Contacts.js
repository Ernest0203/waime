import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contacts from './Contacts.js';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	
  render(){
    return (
      <section className="contacts">
				<h2 className="contacts__title">Контакты</h2>
				<div className="contacts__list" >
					<p>Telegram: </p>
					<p>Email</p>
					<p>instagram</p>
				</div>
				<div className="feedback">
					<h4 className="feedback__title">Задать вопрос или узнать больше — напишите нам!</h4>
					<form>
						<input type="text" name="name" placeholder="Имя" required /> <br/>
						<input type="email" name="email" placeholder="Email" required /> <br/>
						<textarea name="question" placeholder="Ваш вопрос" required></textarea>
						<button type="submit" className="btn-link btn-submit">Задать вопрос</button>
					</form>
				</div>
			</section>
    );
  }
}

export default Products;