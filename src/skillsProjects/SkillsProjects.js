import React from 'react';
import classes from './SkillsProjects.css';

const skillsProjects = () => {
    return (    
        <div className={classes.grid}>
            <div className={classes.cell1}>
                <p className={classes.text}>Skills and Projects</p>
            </div>
            <div className={classes.cell2}>
                <p className={classes.text}> Tetris </p>
                <img className={classes.rs2} src="./Tetris.jpeg" alt="Tetris implemented on a Tiva microprocessor"/>
            </div>
            <div className={classes.cell3}>
                <p className={classes.text}> Coursera's Machine Learning Course </p>
            </div>
            <div className={classes.cell4}> 
                <p className={classes.text}> BeamChase </p>
            </div>
            <div className={classes.cell5}>
                <p className={classes.text}> Address Book </p>
            </div>
            <div className={classes.cell6}>
                <p className={classes.text}> Morse Code </p>
            </div>
            <div className={classes.cell7}>
                <p className={classes.text}> Announcement Catalogue </p>
            </div>
            <div className={classes.cell8}>
                <p className={classes.text}> Check out my Github account below! </p>
            </div>
            <div className={classes.cell9}> 
                <p className={classes.text}> Minesweeper </p>
            </div>
        </div>
    );
}

export default skillsProjects;