import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import SkillsProjects from './skillsProjects/SkillsProjects.js';

import FrontPage from './frontPage/FrontPage.js';
import NavBar from './navBar/NavBar.js';


class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/>
        <FrontPage/>
        <div> */}
          <SkillsProjects/>
          {/* </div> */}
        
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
