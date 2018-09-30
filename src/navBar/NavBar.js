import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.css';
import logo from "./Logo.png";

const navBar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className={`navbar-brand ${classes.emilyLink}`} href="/">
        <img className={classes.logo} src={logo} alt="Favicon"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/about'>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to='/projects'>Skills and Projects</Link>
          </li>   
          
        </ul>
      </div>
    </nav>
  );
}

export default navBar;