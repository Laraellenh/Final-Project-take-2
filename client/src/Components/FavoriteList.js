import React, {useState, useEffect} from 'react'
import Favorite from './Favorite'
import Nav from './Nav'

function FavoriteList() {

  const [favorites, setFavorites] = useState([])
   
  useEffect(()=>{
    fetch('/favorite_books')
    .then(r=>r.json())
     .then(data=> {
        setFavorites(...favorites, data)
       console.log(data)
       
     })

  }, [])
  


  
  // function handleDeleteItem(deletedItem) {
  //   const updatedFaves = favorites.filter((f)=> f.id !==deletedItem.id)
  //   setFavorites(updatedFaves)
  //  }
// function handleDeleteFave(){
      //   fetch('/favorite_books', {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-type': 'application/json'
      //   }
      //   .then((r) => r.json())
      //   .then(() => handleDeleteItem(f))
      //   })
      // }
let t= favorites?.map(f=>  { 
    
       console.log(f)
       return (<Favorite
        //  handleDeleteItem={handleDeleteItem} handleDeleteFave={handleDeleteFave} 
        favorites={favorites} f={f} key={f.id} />)
    }
    )
  
    
  return (
    <div >
      <Nav></Nav>
     {t}
    </div>
      
      
    
  )
}

export default FavoriteList