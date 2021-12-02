import React, { Component } from "react";
import classes from './NewsFeed.module.css'
import axios from "axios";
import NewsItemsList from './NewsItems/NewsItemsList'
import NewsItemsCard from "./NewsItems/NewsItemsCard";

class NewsFeed extends Component{
    state = {
        news : [],
        toShow : []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({news : response.data})
            })

        let arr = [];
        for(let i=0;i<=50; i++)
            arr[i] = true;

        this.setState({toShow : arr})
    }

    ItemHandler = (id) => {
        let arr = [...this.state.toShow];
        arr[id] = false;

        this.setState({toShow : arr});
    }

    render(){
        let news = null;
        
        if(this.props.toggle)
        {
            news = this.state.news.map(newsList => {
                    return <NewsItemsList newsItemList = {newsList}
                        key = {newsList.id}
                        onClick = {() => this.List(newsList.id)}
                        ItemHandler = {() => this.ItemHandler(newsList.id)} 
                        show = {this.state.toShow[newsList.id]}
                        />
            })
        }

        else{
            news = this.state.news.map(newsList => {
                return <NewsItemsCard newsItemList = {newsList}
                        key = {newsList.id}
                        onClick = {() => this.List(newsList.id)}
                        ItemHandler = {() => this.ItemHandler(newsList.id)} 
                        show = {this.state.toShow[newsList.id]}
                        />
            })
        }

        return(
            <div className = {classes.NewsContainer}>
                <h1>Here's your news</h1>
                <div className = {classes.News}>
                    {news}
                </div>
            </div>
        );
    }
}

export default NewsFeed