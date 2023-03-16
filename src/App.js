
import './App.css';
import React, { useState } from 'react';


function App() {
  const[status,setStatus] = useState(true);
  return (
    <div className="App">
      <div>
        <h1 style={{backgroundColor:"skyblue", color:"#fff"}}>Hide and Show Element</h1>
      </div>
      {
        status?
        <h2>Hello World!</h2>:
        null
      }
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </div>
    
  );
}

export default App;
