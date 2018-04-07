import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import SkillsProjects from './skillsProjects/SkillsProjects.js';
import FrontPage from './frontPage/FrontPage.js';
import NavBar from './navBar/NavBar.js';
import AboutMe from './aboutMe/AboutMe.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {/* <FrontPage/> */}
        {/* <div> */}
          {/* <SkillsProjects/> */}
          {/* </div> */}
          <AboutMe/>
      </div>
    );
  }
}

export default App;
