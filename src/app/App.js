import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatabaseController from '../database/databaseController.js';
import Header from './Header';
import Footer from './Footer';
import SignInPage from '../signin/SignInPage';

import './style.styl';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header />
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
