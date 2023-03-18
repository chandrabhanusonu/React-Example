
import './App.css';
import React, { useState } from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      name:"Sonu"
    }
    console.warn("constructor");
  }

  componentDidMount(){
    console.warn("componentDidMount");
  }

  render(){
    console.warn("render");
    return (
                                                                                                                               
      <div className="App">
        <div>
          <h1>Component Did Mount , Life Cycle Method</h1>
        </div>
        <h2>Name :- {this.state.name}</h2>
        <button onClick={() => this.setState({name:"Ram"})}>update Name</button>
      </div>
      
    )
  }
    
  }
  
export default App;
