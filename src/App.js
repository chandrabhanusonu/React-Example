
import './App.css';
import User from './User';
import React, { useState } from 'react';
function App() {
    const [name,setName] = useState("Sonu Singh");
    return (
                                                                                                                               
      <div className="App">
        <div>
          <h1>Render,Life Cycle Method</h1>
        </div>
        <User name={name} />
        <button onClick={() => setName("Ram Singh")}>Update Name</button>
      </div>
      
    )
  }
  
export default App;
