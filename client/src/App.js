
import './App.css';
import { useHistory } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom";
// App - setUser in state
import Auth from './Components/Auth'
import Login from './Components/Login'
import Home from './Components/Home'
// import Booklist from './Components/Booklist';

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

  //  array of titles that need to be .entries
    const [titles, setTitles] = useState([])
    const [favesArray, setFavesArray] = useState([])
  
    // fetch BookList, add them to state
    useEffect(()=>{
        fetch('/books')
        .then(r=>r.json())
        .then(data=>{
          
          const titlesArray = data.entries
          // array of all the books from API
          // console.log(titlesArray)
          setTitles(titlesArray)
         
        })
      
      }, [])
  //  function addFavoriteToList(bookObj){
  //    setFavesArray(...favesArray, title)

  //  }
      console.log(titles)
  return (
    <>
   
   <div style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-ksTgjSWk-8FxS2FYw_FCrmir26sfWbgCg&usqp=CAU")` 
    }}>
     
    </div>
  
   <Switch>  
    <Route exact path="/signup">
          <Auth/>
    </Route>
    <Route exact path="/login">
          <Login onLogin={handleLogin}  />
    </Route>
    <Route exact path="/"> <Home titles={titles} user={user} setFavesArray={setFavesArray} handleLogOutClick={handleLogOutClick} /></Route>
    </Switch>
   
   </>
  );
}

export default App;
