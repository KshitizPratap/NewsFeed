import React from "react";
import classes from './Backdrop.module.css'

const backdrop = (props) => {
    let style = classes.Backdrop

    if(props.show === false)
        style = classes.NoDisplay

    return(
        
        <div className = {style}
            onClick = {props.BackDropHandler}>
    </div>
    )
    
}

export default backdrop;
