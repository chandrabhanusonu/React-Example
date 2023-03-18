
import './App.css';
import React, { useState } from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      count:0
    }
  }

 shouldComponentUpdate(){
  console.warn("shouldComponentUpdate",this.state.count);
  if(this.state.count <10)
  return true;
 }

  render(){
    return (                                                                                                                        
      <div className="App">
        <div>
          <h1>Should Component Update , Life Cycle Method</h1>
        </div>
        <h2>Number :- {this.state.count}</h2>
        <button onClick={()=> this.setState({count:this.state.count +1 })}>Update Number</button>
      </div>
      
    )
  }
    
  }
  
export default App;
