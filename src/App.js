
import { useState } from 'react';
import './App.css';
import User from './User';
function App() {

  function getData(){
    alert("Hello form App");
  }

  return (
    <div className="App">
      <div>
        <h1 style={{backgroundColor:"skyblue" , padding:"2rem"}}>Pass function as Props</h1>
      </div>
      <User data={getData} />
      
    </div>
    
  );
}

export default App;
