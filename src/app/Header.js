import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from '../navbar/Navbar'
import logo from './images/logo.png'

export default class Header extends Component {
  render(){
    return (
      <header className="header">
        {/* <Link to="/"><img className="logo" src={logo} /></Link> */}
        <Navbar />
      </header>
    );
  }
}
