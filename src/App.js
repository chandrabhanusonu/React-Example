
import './App.css';
import React, { useState } from 'react';
import Student from './Student';

class App extends React.Component {

  

  constructor(){
    super();
    this.state = {
      show:true
    }
  }


  render(){
    return (                                                                                                                        
      <div className="App">
        <div>
          <h1>Component Will Unmount , Life Cycle Method</h1>
        </div>
        {this.state.show ? <Student /> : <h1>Child Component Will Be Remove</h1>}
         
        <button onClick={() => this.setState({show:!this.state.show})}>Toggle Chid Component</button>
      </div>
      
    )
  }
    
  }
  
export default App;
