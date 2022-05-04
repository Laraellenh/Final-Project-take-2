import React, {useState, useEffect} from 'react'
import Favorite from './Favorite'
import Nav from './Nav'

function FavoriteList({handleLogOutClick}) {

  const [favorites, setFavorites] = useState([])
  const [note, setNote] = useState([])
  useEffect(()=>{
    fetch('/favorite_books')
    .then(r=>r.json())
     .then(data=> {
        setFavorites((favorites)=>data, ...favorites)
       console.log(favorites)
    
     })

  }, [note])
 
let t= favorites?.map(f=>  { 
    
      //  console.log(f)
       return (<Favorite setFavorites={setFavorites} note={note} setNote={setNote}
        //  handleDeleteItem={handleDeleteItem} handleDeleteFave={handleDeleteFave} 
        favorites={favorites} f={f} key={f.id} />)
    }
    )
  
    
  return (
    <div >
      <Nav handleLogOutClick={handleLogOutClick}></Nav>
      <br></br>
      <img 
    
    className='img'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjer9Nltcrw87qm94jEt-jPqiVGVxirr6nA&usqp=CAU' alt="Vonnegut image"
     />
      <h3 className='nav'> Your Reading List </h3>
        {t}
        <br></br>
    </div>
      
      
    
  )
}

export default FavoriteList