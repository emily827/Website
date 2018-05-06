import React from 'react';
import classes from './FrontPage.css';

const frontPage = () => {
    return (
        <div>
            <div className = {classes.backgroundStyle}>
                <div className={classes.paragraph}> 
                    <div className={classes.smallText}>Hi, my name is<br/></div>
                    <div className={classes.largeText}>EMILY LIN<br/></div>
                    <div className={classes.mediumText}>Developer<br/></div>
                    <div className={classes.smallText}>Based in Toronto</div>
                </div>
            </div>
        </div>
    );
}


// withRouter(connect(mapStateToProps, {})(Layout));
export default frontPage;