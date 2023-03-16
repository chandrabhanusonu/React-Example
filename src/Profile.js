import React,{useState} from "react";

function Profile() {
    const [loggedIn , setLoggedIn] = useState(2);
    // const loggedIn = 2; This Also Condition Will Be work.
    
        return(
            <div>
                {/* {loggedIn? <h2>Welcome Sonu</h2>: <h2>Welcome Guest</h2>} IF Else Condition */}
                {loggedIn ===1 ? <h2>Welcome User 1</h2> : loggedIn ===2 ? <h2>Welcome User 2</h2>:<h2>Welcome User 3</h2>}
            </div>
        )

   
}

export default Profile;