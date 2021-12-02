import React from "react";
import classes from './Toggle.module.css'

const toggle = (props) => {
    // let Toggle = classes.ToggleContainer

    // if(props.show)
    // {
    //     Toggle = classes.NoDisplay
    // }

    return(
        <div className = {props.show ? classes.NoDisplay : classes.ToggleContainer}>
            <h2>View Toggle</h2>
            <div className = {classes.ToggleButton}>
                <p 
                    onClick = {() => props.ToggleHandler(1)}
                    style = {{backgroundColor : props.toggle ? "transparent" : "rgb(16, 18, 48)",
                              color : props.toggle ? "rgb(16, 18, 48)" : "white"}}>Card</p>
                <p 
                    style = {{backgroundColor : props.toggle ? "rgb(16, 18, 48)" : "transparent",
                              color : props.toggle ? "white" : "rgb(16, 18, 48)"}}
                    onClick = {() => props.ToggleHandler(2)}>List</p>
            </div>
        </div>
    );
}

export default toggle;
