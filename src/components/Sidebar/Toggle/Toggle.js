import React from "react";
import classes from './Toggle.module.css'

const toggle = (props) => {
    let Toggle = classes.ToggleContainer

    if(props.show)
    {
        Toggle = classes.NoDisplay
    }

    return(
        <div className = {Toggle}>
            <h2>View Toggle</h2>
            <div className = {classes.ToggleButton}>
                <p 
                    onClick = {() => props.ToggleHandler(1)}
                    style = {{backgroundColor : props.toggle ? "transparent" : "greenyellow"}}>Col</p>
                <p 
                    style = {{backgroundColor : props.toggle ? "greenyellow" : "transparent"}}
                    onClick = {() => props.ToggleHandler(2)}>List</p>
            </div>
        </div>
    );
}

export default toggle;
