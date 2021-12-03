import { Component } from 'react';
import Sidebar from './components/Sidebar/sidebar'
import classes from './App.module.css'
import NewsFeed from './components/Newsfeed/NewsFeed';

class App extends Component{
  state = {
    show : false,
    toggle : false
  }

  ModalHandler = () => {
    const temp = this.state.show
    this.setState({show : !temp})
  }

  BackDropHandler = () => {
    const temp = false;
    this.setState({show : temp});
  }

  toggleHandler = (num) => {
    const temp = this.state.toggle;

    if(num === 2 && temp === false){
      this.setState({toggle : true})
    }
    else if(num === 1 && temp === true){
      this.setState({toggle : false})
    }
  }

  render(){
    return(
      <div className = {classes.Container}>
        <Sidebar 
          show = {this.state.show}
          BackDropHandler = {() => this.BackDropHandler()}
          ModalHandler = {() => this.ModalHandler()}
          ToggleHandler = {(num) => this.toggleHandler(num)}
          toggle = {this.state.toggle}/>

        <NewsFeed toggle = {this.state.toggle}/>
      </div>
    )
  }
}

export default App;
