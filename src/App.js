
import React,{ useState } from 'react';
import './App.css';
class App extends React.Component {

  constructor() {
    super();
    this.state={
      data:"Sonu Singh"
    }
  }

  render() {    
    console.warn("Render");
    return (
                                                                                                                               
      <div className="App">
        <div>
          <h1 style={{backgroundColor:"skyblue" , padding:"2rem"}}>Constructor Life Cycle Method</h1>
        </div>
        <h2>{this.state.data}</h2>
      </div>
      
    )
  }
  
}

export default App;
