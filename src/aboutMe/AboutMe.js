import React from 'react';
import classes from './AboutMe.css';
import linkedIn from '../Resources/Images/LinkedIn.svg';
import github from '../Resources/Images/GitHub.svg';

const AboutMe = () => {
  return (
    <div className="container-fluid" alt="">
        <div className={`row ${classes.background}`}>
          <div className={`col ${classes.text}`}>
            <div className={classes.title}>About Me</div>
            <div className={classes.paragraph}>Why hello there! My name is Emily, and I’m currently studying Software Engineering at the University of Waterloo. When I’m not coding, you can find me reading, playing the violin, piano, or guitar, and watching anime and movies! I also enjoy hiking and skiing.</div>
            <div className={`text-center ${classes.connect}`}> 
              <a target="_blank" href='https://www.linkedin.com/in/emily-lin-95b636124'>
                <img className={`${classes.linkedIn}`} src={linkedIn} alt="LinkedIn Icon"/>
              </a>
              <a target="_blank" href='https://github.com/emily827'>
                <img className={`${classes.github}`} src={github} alt="Github Icon"/>
              </a>
            </div>
          </div>
        </div>
    </div>
  ); 
}

export default AboutMe;