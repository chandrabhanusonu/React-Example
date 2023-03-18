
import './App.css';
import React, { useState } from 'react';

class App extends React.Component {

  constructor(){
    super();
    console.warn("constructor")
    this.state = {
      count:0
    }
  }

  componentDidUpdate(preProps,perState,snapShort) {
    console.warn("componentDidUpdate" , perState,snapShort)
  }
  

  render(){
    console.warn("render");     
    return (                                                                                                                        
      <div className="App">
        <div>
          <h1>Component Did Update , Life Cycle Method</h1>
        </div>
        <h2>Number :- {this.state.count}</h2>
        <button onClick={()=> this.setState({count:this.state.count +1 })}>Update Number</button>
      </div>
      
    )
  }
    
  }
  
export default App;
