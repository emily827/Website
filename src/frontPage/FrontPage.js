import React from 'react';
import classes from './FrontPage.css';
// const background = require("./Background.svg");

const frontPage = () => {
  return (
    <div className="container-fluid" alt="">
      <div className={`row ${classes.background}`}>
        <div className={`col ${classes.text}`}>
          <div className={`${classes.paragraph} col-md-12 mb-4`}> 
            <div className={classes.smallText}>Hi, my name is<br/></div>
            <div className={classes.largeText}>EMILY LIN<br/></div>
            <div className={classes.mediumText}>Developer<br/></div>
            <div className={classes.smallText}>Based in Toronto</div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default frontPage;