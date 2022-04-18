// import React, {useState, useEffect} from 'react'
import Nav from './Nav'

import BookList from './Booklist'
// import BookMapper from './BookMapper'

function Home({handleLogOutClick, addFavoriteToList, titles, favesList, setFavesList, setFavesArray, }) {
  //  console.log(titles)
  // once titles.length >0
      const bookComponentArray =  titles.map(b=> <BookList setFavesList={setFavesList} favesList={favesList} setFavesArray={setFavesArray} addFavoriteToList={addFavoriteToList} key={b.id}  b={b}/>)
     
      // const favesArray= [...title, newArray]

  // const fave = favesArray.map(faveItem=> faveItem) 
  
  


  return (
    <div>
    <Nav handleLogOutClick={handleLogOutClick} />
    {/* <BookMapper  /> */}
    {/* <BookList titles={titles} /> */}
    {/* <FavoriteList   /> */}
    {bookComponentArray}
 
    
    </div>
  )
}

export default Home