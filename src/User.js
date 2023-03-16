import React from "react";
function User(props) {
    return(
        <div>
            <h2>User Component</h2>
            <button onClick={props.data}>Call Data function</button>
        </div>
    )
}

export default User;