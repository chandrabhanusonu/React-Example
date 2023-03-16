
import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("");
  const [tac,setTac] = useState(false);
  const[intrest,setIntrest] = useState("");
  function getFormData(e) {
    console.log(name,tac,intrest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <div>
        <h1 style={{backgroundColor:"skyblue" , padding:"2rem"}}>Basic Form</h1>
      </div>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /> <br /><br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>Select Option</option>
          <option>Avanger</option>
          <option>DC</option>
        </select> <br /><br />
        <input type="checkbox" onChange={(e) => setTac(e.target.checked)} /> <span>Accept Term and Condition</span> <br /><br />
        <button type="submit">Submit</button> 
      </form>
    </div>
    
  );
}

export default App;
