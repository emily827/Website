import React from 'react';
import FrontPage from '../frontPage/FrontPage.js';
import AboutMe from '../aboutMe/AboutMe.js';
import SkillsProjects from '../skillsProjects/SkillsProjects.js';
import { Link, Route } from 'react-router-dom';
import classes from './NavBar.css';

const navBar = (props) => {
    return (
        <div>
            <ul>
                <li className={classes.emilyLink}>
                    <Link to = "/">Emily Lin</Link>
                </li>
                <li> 
                    <Link to = "/about">About Me</Link>
                </li>
                <li>
                    <Link to = "/skillsAndProjects">Skills and Projects</Link>
                </li>
            </ul>
            <Route path="/" exact render={() => {
                    console.log("Here!");
                    return <FrontPage/>
                }}/>
            <Route path="/aboutMe" render={() => {
                console.log("Here!");                
                return <div>TEST</div>
            }}/>
            <Route path="/skillsAndProjects" component={SkillsProjects}/>
        </div>
    );
}

export default navBar;