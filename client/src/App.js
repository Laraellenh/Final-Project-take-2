import logo from './logo.svg';
import './App.css';
import { useHistory } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom";
// App - setUser in state
import Auth from './Components/Auth'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  const [user, setUser] =useState(null);
  const history = useHistory()
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    
    setUser(user);
    history.push("/")
    
  }

  function handleLogOutClick(e) {
    console.log("click", e)
    
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/login");
      }
    });
    
  }
  return (
    
   <Switch>  
    <Route exact path="/signup">
          <Auth/>
    </Route>
    <Route exact path="/login">
          <Login onLogin={handleLogin}  />
    </Route>
    <Route exact path="/"> <Home user={user} handleLogOutClick={handleLogOutClick} /></Route>
    </Switch>
   
  );
}

export default App;
