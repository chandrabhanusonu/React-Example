import React from "react";

class User extends React.Component{
    
    constructor(){
        super();
        this.state = {
            email: "Sonu@example.com"
        }
    }
    
    render(){

        console.warn("Render Method" ,this.props) ;
        return(
            <div>
                <h2>Name :- {this.props.name}</h2> 
                <h3>Email :- {this.state.email} </h3>
                <button onClick={() => this.setState({email:"Ram@example.com"})}>Email Update</button>
            </div>
        )
    }
}

export default User;