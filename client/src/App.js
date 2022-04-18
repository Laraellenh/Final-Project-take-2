
import './App.css';
import { useHistory } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom";
import Auth from './Components/Auth'
import Login from './Components/Login'
import Favorite from './Components/Favorite'
import Home from './Components/Home'
import FavoriteList from './Components/FavoriteList';
// import Booklist from './Components/Booklist';

function App() {
  const [user, setUser] =useState(null);
  const history = useHistory()
  const [favesArray, setFavesArray] = useState([])
  // const [favesList, setFavesList] = useState([])
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

    const [titles, setTitles] = useState([])
 

    
    useEffect(()=>{
        fetch('/books')
        .then(r=>r.json())
        .then(data=>{
          
          const titlesArray = data.entries
  
          setTitles(titlesArray)
         
        })
      
      }, [])
      const [favorites, setFavorites] = useState([])
     
      console.log(favorites)
     const potato = favorites.map(f=> <Favorite  key={f.id} f={f} /> )
     
      useEffect(()=>{
        fetch('/favorite_books')
        .then(r=>r.json())
         .then(data=> {
            setFavorites([data, ...favorites])
            
         })

      }, [])

     
  return (
    <>
   
   {potato} 
   <div 
   style={{ 
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
     {/* {favorites ? <FavoriteList favorites={favorites} /> : null} */}
    <Route exact path='/mylist'> <FavoriteList favorites={favorites} potato={potato} /> </Route>
    <Route exact path="/"> <Home setFavesArray={setFavesArray} favesArray={favesArray} titles={titles} user={user}  handleLogOutClick={handleLogOutClick} /></Route>
    </Switch>
   
   </>
  );
}

export default App;
