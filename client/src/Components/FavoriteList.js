import React from 'react'
import Favorite from './Favorite'

function FavoriteList({potato, favorites}) {
 
console.log(favorites[0])
// a nested array

  if (favorites[0]) {
    favorites[0].map(f=>  { 
     return (<Favorite f={f.book.title} key={f.id} />)})}
    

    
  
  return (
    <div >
      
    </div>
      
      
    
  )
}

export default FavoriteList