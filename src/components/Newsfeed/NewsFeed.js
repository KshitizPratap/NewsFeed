import React, { Component } from "react";
import classes from './NewsFeed.module.css'
import axios from "../../axios";

import NewsItemsList from './NewsItems/NewsItemsList';
import NewsItemsCard from "./NewsItems/NewsItemsCard";

class NewsFeed extends Component{
    state = {
        news : [],
        toShow : [],
        start : 0,
        update : false
    }
    
    componentDidUpdate(){
        if(this.state.update && this.state.start < 100){
            axios.get("/posts?_start=" + this.state.start + "&_limit=20")
            .then(response => {
                const s = this.state.start + 20;
                let arr = [...this.state.news, ...response.data];

                this.setState({news : arr, update : false, start : s})
                
            })
        }
    }

    componentDidMount(){
        axios.get("/posts?_start=" + this.state.start + "&_limit=20")
            .then(response => {
                const s = this.state.start + 20
                this.setState({news : response.data, start : s})
            })

        this.setState({toShow : Array(101).fill(true)})
    }

    ItemHandler = (id) => {
        let arr = [...this.state.toShow];
        arr[id] = false;

        this.setState({toShow : arr});
    }

    fetchMore = (event) => {
        const check = (event.target.scrollHeight - event.target.scrollTop) <= (event.target.clientHeight);

        if(check){
            this.setState({update : true});
        }
    }

    render(){
        let news = null;
        
        if(this.props.toggle){
            news = this.state.news.map(newsList => {
                    return <NewsItemsList newsItemList = {newsList}
                        key = {newsList.id}
                        ItemHandler = {() => this.ItemHandler(newsList.id)} 
                        show = {this.state.toShow[newsList.id]}/>
            })
        }

        else{
            news = this.state.news.map(newsList => {
                return <NewsItemsCard newsItemList = {newsList}
                        key = {newsList.id}
                        show = {this.state.toShow[newsList.id]}
                        ItemHandler = {() => this.ItemHandler(newsList.id)} />
            })
        }

        return(
            <div className = {classes.NewsContainer} onScroll = {this.fetchMore}>
                <h1>Here's your news</h1>
                <div className = {classes.News}>
                    {news}
                </div>
            </div>
        );
    }
}

export default NewsFeed