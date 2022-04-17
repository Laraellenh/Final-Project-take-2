import React from 'react'
import {useEffect, useState} from 'react'

function FavoriteList() {
  const [favorites, setFavorites] = useState([])

  // const fave = favesArray.map(faveItem=> faveItem) 
  
  useEffect(()=>{
    fetch('/favorite_books')
    .then(r=>r.json())
     .then(data=>setFavorites(data))
  }, [])
  // console.log(favorites)
  const fave = favorites.map(f=>  { 
    console.log(f.book.title)
     return  (<h4 key={f.id}> {f.book.title} </h4>)})
  // console.log(fave)
  return (
    <div >
         {fave}
    </div>
      
      
    
  )
}

export default FavoriteList