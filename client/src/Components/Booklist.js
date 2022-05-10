
import React, {useState} from 'react'
import FavoriteList from './FavoriteList'

function Booklist({setFavesArray, b, favesArray, favesList, setFavesList}) {


  function handleClick(b){
    
   console.log("adding book to faves", b)
    fetch('/favorite_books', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(b)
       
    })
    .then(r=>r.json())
    .then(newTitle=>{
      setFavesArray(favesArray=>[ newTitle, ...favesArray])
    })
    
  }

  return (
    <div>
       <h4>
        {b.title}
       
            <button 
            onClick={()=>handleClick(b)}
            >
                Add to Your Favorites List
            </button>
            
        </h4>
       
    </div>
  )
}

export default Booklist
