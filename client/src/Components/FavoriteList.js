import React, {useState, useEffect} from 'react'
import Favorite from './Favorite'
import Nav from './Nav'

function FavoriteList() {

  const [favorites, setFavorites] = useState([])
   
  useEffect(()=>{
    fetch('/favorite_books')
    .then(r=>r.json())
     .then(data=> {
        setFavorites(data, ...favorites)
       console.log(data)
    
     })

  }, [])
 
let t= favorites?.map(f=>  { 
    
      //  console.log(f)
       return (<Favorite setFavorites={setFavorites}
        //  handleDeleteItem={handleDeleteItem} handleDeleteFave={handleDeleteFave} 
        favorites={favorites} f={f} key={f.id} />)
    }
    )
  
    
  return (
    <div >
      <Nav></Nav>
      <h3> your titles</h3>
        {t}
    </div>
      
      
    
  )
}

export default FavoriteList