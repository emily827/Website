import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.css';

const navBar = (props) => {
    return (
        <ul>
            <li className={classes.emilyLink}>
                <Link to = "localhost:3000/">Emily Lin</Link>
            </li>
            <li className={classes.contactMe}>
                <Link to = "localhost:3000/contact">Contact me</Link>
            </li>
            <li> 
                <Link to = "localhost:3000/about">About Me</Link>
            </li>
            <li>
                <Link to = "localhost:3000/skill">Skills and Projects</Link>
            </li>
        </ul>
    );
}

export default navBar;