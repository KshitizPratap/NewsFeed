import React from "react";
import classes from './NewsItemsList.module.css'
import crossButton from '../../../assests/cross1.png'

const newsItemList = (props) => {

    return(
        <div className = {props.show ? classes.MainContainer : classes.NoDisplay}>
            <div className = {classes.Container}>
                <h5>{props.newsItemList.title}</h5>
                <p>{props.newsItemList.body}</p>
            </div>
            <div className = {classes.ImgContainer} onClick = {props.ItemHandler}>
                <img src = {crossButton}/>
            </div>
        </div>
    );
}

export default newsItemList;