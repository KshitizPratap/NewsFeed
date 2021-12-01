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
                <a style = {{backgroundColor : 'blue'}}
                    onClick = {() => props.ToggleHandler(1)}>Col</a>
                <a style = {{backgroundColor : 'blue'}}
                    onClick = {() => props.ToggleHandler(2)}>List</a>
            </div>
        </div>
    );
}

export default toggle;
