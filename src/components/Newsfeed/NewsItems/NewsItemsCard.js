import React from "react";
import classes from './NewsItemsCard.module.css';
import cross from '../../../assests/cross1.png'

const newsItemsCard = (props) => {

    let heading = null
    if(props.newsItemList.title.length > 15){
        heading = props.newsItemList.title.slice(0, 15) + '...'
    }
    else{
        heading = props.newsItemList.title;
    }
        
    const content = props.newsItemList.body.slice(0, 75) + '...';

    return(
        <div className = {props.show ? classes.Maincontainer : classes.NoDisplay}>
            <div 
                onClick = {props.ItemHandler}
                className = {classes.ImgContainer}>
                <img src = {cross}/>
            </div>
            <div className = {classes.Container}>
                <h5>{heading}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default newsItemsCard;