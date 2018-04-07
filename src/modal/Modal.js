import React from 'react';
import classes from './Modal.css';

const Modal = (props) => {
    const formattedBody = props.body.split(`\n`).map((item, key) => {
        return (
            <span key={key}>
                {item}
                <br/>
            </span>
        )
    });
    return (
        <div className={classes.modal}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.body}>{formattedBody}</p>
            <p className={classes.subheading}><strong>Tools:</strong> {props.tools}</p>
        </div>
    ); 
}

export default Modal;