
import './App.css';
import Student from './Student';
import React,{Component} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"Sonu"
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Pops</h1>
        <Student name={this.state.name} email="Sonusingh@gmail.com"/>
        <button onClick={ () => this.setState({name:"Ram"})}>Change Name</button>
      </div>
      
    );
  }
  
}

export default App;
