import React from "react";
import classes from './feedback.module.css'

const feedback = (props) => {
    let ListeningClass = [classes.ListeningContainer, classes.BGGreen];

    if(props.show)
    {
        ListeningClass = [classes.ListeningContainer, classes.BGRed]
    }

    return(
        <div className = {classes.FeedbackContainer}>
            <h2>Have a Feedback?</h2>
            <div 
                className = {ListeningClass.join(' ')}
                onClick = {props.ModalHandler}>
                <p>We're Listening!</p>
            </div>
        </div>
    )
}

export default feedback;