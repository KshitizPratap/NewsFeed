import React from "react";
import classes from './NewsItemsCard.module.css';

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
        <div className = {classes.Maincontainer}>
            <div className = {classes.Container}>
                <h5>{heading}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default newsItemsCard;