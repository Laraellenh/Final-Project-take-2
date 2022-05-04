// import React, {useState, useEffect} from 'react'
import Nav from './Nav'

import BookList from './Booklist'
// import BookMapper from './BookMapper'

function Home({handleLogOutClick, addFavoriteToList, titles, favesList, setFavesList, setFavesArray, favesArray }) {
  //  console.log(titles)
  // once titles.length >0
      const bookComponentArray =  titles?.map(b=> <BookList favesArray={favesArray} setFavesList={setFavesList} favesList={favesList} setFavesArray={setFavesArray} addFavoriteToList={addFavoriteToList} key={b.id}  b={b}/>)
   
  

  return (
    <div>
    <Nav handleLogOutClick={handleLogOutClick} />
    <br></br>
    <img 
    
    className='img'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMy4PkmP0PKx96lB4hiy__M8hH7itaHRIwiQ&usqp=CAU' alt="Vonnegut image"
     />
    {/* <BookMapper  /> */}
    {/* <BookList titles={titles} /> */}
    {/* <FavoriteList   /> */}
    {bookComponentArray}
 
    
    </div>
  )
}

export default Home