import React, { Component } from 'react';
import './App.css';
import FrontPage from './frontPage/FrontPage.js';
import NavBar from './navBar/NavBar.js';
import AboutMe from './aboutMe/AboutMe.js';
import SkillsProjects from './skillsProjects/SkillsProjects.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
          <NavBar/>
          <Switch>
                <Route exact path="/" component={FrontPage}/>
                <Route exact path="/about" render={() => <AboutMe/>}/>
                <Route exact path="/projects"  component={SkillsProjects}/>
            </Switch>
        </div>
    );
  }
}

export default App;
