import React from "react";
class Student extends React.Component{
    componentWillUnmount(){
        console.warn("componentWillUnmount Called")
      }
    render(){
        return(
            <div>
                <h1>Student Info</h1>
            </div>
        )
    }
    
}

export default Student;