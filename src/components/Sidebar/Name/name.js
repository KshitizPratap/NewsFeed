import React from "react";
import classes from './name.module.css';
import profile from '../../../assests/profile.jpg'

const name = () => {
    return(
        <div className = {classes.Container}>
            <img src = {profile} />
            <div className = {classes.Heading}>
                <h4>Hi Reader,</h4>
                <p>Here's your news</p>
            </div>
        </div>
    )
}

export default name;