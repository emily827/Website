import React from 'react';
import ReactDOM from 'react-dom';
import classes from './SkillsProjects.css';
import Tetris from '../Resources/Images/Tetris.png';
import BeamChase from '../Resources/Images/BeamChase.png';
import ML from '../Resources/Images/MachineLearning.png';
import Announcement from '../Resources/Images/Announcements.png';
import Minesweeper from '../Resources/Images/Minesweeper.png';
import AddressBook from '../Resources/Images/AddressBook.png';
import SkillsImage from "../Resources/Images/SkillsProjects.png";
import Website from '../Resources/Images/Website.png';
import { Link } from 'react-router-dom';
import Modal from "../modal/Modal.js";

class SkillsProjects extends React.Component {
    state = {
        showModal: false,
        image: null,
        body: null,
        tools: null,
        title: null
    }
    
    handleClick(image, body, tools, title) {
        this.setState({showModal: true, image, body, tools, title});
    }
    
    overlayClick() {
        this.setState({
            showModal: false,  
            image: null,
            body: null,
            tools: null,
            title: null
        })
    }

    render() {
        return (
            <div>
                <div id='grid' className={classes.grid}>
                    <div className={classes.cell1}>
                        <p className={classes.text}>Skills and Projects</p>
                        <img className={classes.rs2} src={SkillsImage} alt="Girl sitting in front of computer"/>
                    </div>

                    <div className={classes.cell2} onClick={() => {
                            const body = `As a kid, I loved playing Tetris. There was just something very fun about figuring out how to get the blocks to fit together in a way that would maxmimize my score.\n So when my friend and I worked together on a project where we were told to just make something cool on the Tiva microprocessor, I knew we had to make Tetris since we had an LCD screen add-on to the board.\n Our game was a full implementation of Tetris and included the ability to pick different levels.`;
                            this.handleClick(Tetris, body, "C, Arduino", "Tetris");
                        }}>
                        <p className={classes.text}> Tetris </p>
                        <img className={classes.rs2} src={Tetris} alt="Tetris implemented on a Tiva microprocessor"/>
                    </div>

                    <div className={classes.cell3} onClick={() => {
                            const body = "Recently, I've been very intrigued by machine learning because of how revolutionary it is. Thus, I decided that it was time for me to take my first steps into the world of AI. \n And boy, I was not disappointed. \n I would 10/10 recommend this course to anyone just beginning to learn about machine learning.";
                            this.handleClick(ML, body, "Matlab", "Coursera's Machine Learning Course");
                        }}>
                        <p className={classes.text}> Coursera's Machine Learning Course </p>
                        <img className={classes.rs2} src={ML} alt="Machine Learning!"/>
                    </div>

                    <div className={classes.cell4} onClick={() => {
                        const body = "Back in the summer of 2016, I participated in the SHAD program which is a summer camp centered around STEM and entrepreneurship. As our final project, we had to design a product which would encourage outdoor play. Hence, my team and I came up with BeamChase which is an external add-on to your phone or iPod which allows you to play laser tag outdoors. \nI led the tech team into designing a prototype composed of an Arduino, IR sensor and emitter, and a bluetooth module which communicated with an Android app to allow players to play laser tag. \nOur team won 2nd place for the Best Business Plan and 3rd for the Best Marketting in the 2016 SHAD Cup. I guess you can say that we were all really BEAMING with joy that day ;)";
                        this.handleClick(BeamChase, body, "Android, Arduino", "BeamChase");
                        }}> 
                        <p className={classes.text}> BeamChase </p>
                        <img className={classes.rs2} src={BeamChase} alt="External phone attachment allowing users to play laser tag outdoors"/>
                    </div>

                    <div className={classes.cell5} onClick={() => {
                            const body = "Front-end web development is always something that I've wanted to learn because it's awesome to be able to build something tangible and see it interact with users. Most of my work experience has been in backend development, so I don't normally see a tangible product that I see and interact with. Thus, I decided to change things up a bit and finally create my own portfolio website. \nHope you've enjoyed the experience so far!";
                            this.handleClick(ML, body, "React, CSS, Webpack, JSX", "Portfolio Website");
                        }}>
                        <p className={classes.text}> This Website </p>
                        <img className={classes.rs2} src={Website} alt="What the website you're on looks like"/>
                    </div>

                    <div className={classes.cell6} onClick={() => {
                            const body = "I made this when I was first learning how to program. I created a Java app which was your basic address book that you'd find on your cellphone. \nNot really sure what else to say about it :P";
                            this.handleClick(AddressBook, body, "Java, Java GUI", "Address Book");
                        }}>
                        <p className={classes.text}> Address Book </p>
                        <img className={classes.rs5} src={AddressBook} alt="Screenshot of address book software that I wrote"/>
                    </div>

                    <div className={classes.cell7} onClick={() => {
                            const body = "This was another school project that I worked on when I was still in high school. My friend and I made a Java app which would allow students to submit proposals for the morning announcements. Our app would then add the proposal to a list of those still seeking approval from teachers, and it would allow users to see the morning announcements to be read on any given day. \nThe reason we decided to create this is because our school had been using paper to do all of these things which led to organization problems and a lot of wasted paper.";
                            this.handleClick(ML, body, "Java, Java GUI", "Announcement Catalogue");
                        }}>
                        <p className={classes.text}> Announcement Catalogue </p>
                        <img className={classes.rs2} src={Announcement} alt="Software used to organize school announcements"/>
                    </div>

                    <div className={classes.cell8}>
                        <p className={classes.text}> Check out my Github account below! </p>
                        <div className={classes.button}>  
                            <Link to="https://github.com/emily827"></Link>
                        </div>
                    </div>

                    <div className={classes.cell9}  onClick={() => {
                            const body = "One of my best friends really loved playing Minesweeper as a kid. So I decided to give her a program which would let her play Minesweeper on her computer that came loaded with quirky pictures, sound-effects, the ability to save and continue her game, and a scoreboard. \nThis present really swept her off her feet.";
                            this.handleClick(Minesweeper, body, "Java, Java GUI", "Minesweeper");
                        }}> 
                        <p className={classes.text}> Minesweeper </p>
                        <img className={classes.rs2} src={Minesweeper} alt="Implementation of Minesweeper"/>
                    </div>
                </div>
                {this.state.showModal && ReactDOM.createPortal(
                    <div className={this.state.showModal ? classes.overlay : classes.noOverlay} onClick={() => this.overlayClick()}>
                        <Modal image={this.state.image} body={this.state.body} tools={this.state.tools} title={this.state.title}></Modal>
                    </div>, document.getElementById('grid'))}
            </div>
        );
    }
}

export default SkillsProjects;