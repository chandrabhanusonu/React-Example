
import { useState } from 'react';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{backgroundColor:"skyblue" , padding:"2rem"}}>Conditional Rendring</h1>
      </div>
      <Profile />
      
    </div>
    
  );
}

export default App;
