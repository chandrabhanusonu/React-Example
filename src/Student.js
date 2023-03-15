import React from "react";

export default class Student extends React.Component 
{
    render(){
        return (
            <div style={{backgroundColor:"skyblue"}}>
                <h1>Students:- {this.props.name}</h1>
                <h1>Email:- {this.props.email}</h1>
            </div>
        )
    }
};