import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      'counter' : 0,
      'errMsg' : '',
    }

  }
  decrementCounter=()=>{
    
    this.setState({counter : this.state.counter - 1});
    if(this.state.counter < 0 ){
      this.setState({
        'errMsg' : 'counter cannot be lessthan zero'
      })
    }
  }
  render(){
    return (
      <div data-testid="component-app">
        <h1 data-testid="counter-display">The current counter is: {this.state.counter} </h1>
        <button data-testid="increment-button" 
        onClick={()=>{this.setState({counter : this.state.counter + 1});}}>Increment counter</button>
        <button data-testid="decrement-button" 
        onClick={this.decrementCounter}>Decrement counter</button>

      {this.state.counter < 0 && <p data-testid="error-message" style={{'color':'red'}}>{this.state.errMsg}</p>}
      </div>

    );
  }
  
}

export default App;
