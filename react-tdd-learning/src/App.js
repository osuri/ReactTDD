import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      'counter' : 0
    }

  }
  render(){
    return (
      <div data-testid="component-app">
        <h1 data-testid="counter-display">The current counter is: {this.state.counter} </h1>
        <button data-testid="increment-button" 
        onClick={()=>{this.setState({counter : this.state.counter + 1});}}>Increment counter</button>
      </div>
    );
  }
  
}

export default App;
