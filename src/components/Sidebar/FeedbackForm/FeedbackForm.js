import React from "react";
import classes from './FeedbackForm.module.css'

const feedbackForm = (props) => {
    return(
        <div 
            className = {classes.FeedbackForm}
            style = {{
                transform : props.show ? 'translateX(350px)' : 'translateX(-200px)',
            }}>

            <h2>Thank you so much taking the time!</h2>
            <h5>Please provide the below details!</h5>
            <div className = {classes.InputContainer}>
                <p>First Name:</p>
                <input type='text' placeholder = " John" />
                <p>Last Name:</p>
                <input type='text' placeholder = " Doe" />
                <p >Address:</p>
                <input className = {classes.Address} type='text' placeholder = " Enter your full postal address" />
                <p>Country:</p>
                <input type='search'/>
                <p>Email Address:</p>
                <input type='email'/>
                <p>Phone Number:</p>
                <input type='tel'/>
            </div>
        </div>
    )
}

export default feedbackForm;