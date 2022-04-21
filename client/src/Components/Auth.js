import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Auth({user, setUser}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    

    const nav = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const newUser = { username, email, password}
    //   if (newUser.username !== "") {
    //       if (newUser.password.length >= 5 && newUser.password.length <= 10) {
          fetch(`/signup`, {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
                  }).then((r) => r.json());
                  console.log(newUser)
                  setUser(user)
                  // if(!user){
                  //     alert(
                  //         "username is taken, please try again")
                  //     nav.push("/signin");
                  // }
                  console.log(user)
                  nav.push("/home");
                }
            //   } else {
            //       alert(
            //       "Your must be between 5 and 10 characters"
            //       );
            //   }
            //   } 
            //   else {
            //     alert("username is taken, choose again");
            //     }
              
        //   }

  
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        <label>
         email
    
        <input type="text" value={email} onChange={(e) => handleEmail(e)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>
      
        
       
        <input type="submit" value="Sign up!" />
      </form>
      
        </>
    )
}


export default Auth