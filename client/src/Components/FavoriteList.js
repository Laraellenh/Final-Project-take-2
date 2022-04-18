import React, {useState, useEffect} from 'react'
import Favorite from './Favorite'

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


let t
  if (favorites) {
    console.log(favorites)
    t= favorites.map(f=>  { 
     
       console.log(f)
       return (<Favorite f={f} key={f.id} />)
    }
    )}
  
  
  return (
    <div >
     {t}
    </div>
      
      
    
  )
}

export default FavoriteList