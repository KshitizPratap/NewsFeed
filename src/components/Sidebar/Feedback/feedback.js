import React from "react";
import classes from './feedback.module.css'

const feedback = (props) => {
    // let ListeningClass = [classes.ListeningContainer, classes.BGGreen];

    // if(props.show)
    // {
    //     ListeningClass = [classes.ListeningContainer, classes.BGRed]
    // }

    return(
        <div className = {classes.FeedbackContainer}>
            <h2>Have a Feedback?</h2>
            <div 
                className = {classes.ListeningContainer}
                style = {{backgroundColor : props.show ? "rgb(16, 18, 48)" : "rgb(173, 222, 245)"}}
                onClick = {props.ModalHandler}>
                <p style = {{color : props.show ? "white" : "rgb(16, 18, 48)"}}>We're Listening!</p>
            </div>
        </div>
    )
}

export default feedback;