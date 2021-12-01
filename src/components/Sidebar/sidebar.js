import React from "react";
import classes from './sidebar.module.css'
import Name from './Name/name'
import Toggle from './Toggle/Toggle'
import Feedback from "./Feedback/feedback";
import FeedbackForm from './FeedbackForm/FeedbackForm'
import Backdrop from '../UI/Backdrop/Backdrop'

const sidebar = (props) => {
    return(
        <div>
            <Backdrop show = {props.show}
                BackDropHandler = {props.BackDropHandler}/>
            <div className = {classes.Container}>
                <Name />
                <Toggle show = {props.show}
                    ToggleHandler = {(num) => props.ToggleHandler(num)}
                    toggle = {props.toggle}/>
                <Feedback 
                    show = {props.show}
                    ModalHandler = {props.ModalHandler}/>
            </div>
            <FeedbackForm show = {props.show}/>
        </div>
    )
}

export default sidebar;

// className = {classes.FullContainer}