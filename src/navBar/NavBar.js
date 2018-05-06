import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.css';
import logo from "./Logo.png";

const navBar = (props) => {
    return (
        <ul>
            <li className={classes.emilyLink}> 
                <Link to="/">
                    <img className={classes.logo} src={logo} alt="Favicon"/>
                    Emily Lin
                </Link>
                </li>
            <li> <Link to='/about'>About Me</Link></li>
            <li><Link to='/projects'>Skills and Projects</Link></li>
        </ul>
    );
}

export default navBar;