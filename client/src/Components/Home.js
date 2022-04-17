// import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import FavoriteList from './FavoriteList'
import BookList from './Booklist'
import BookMapper from './BookMapper'

function Home({handleLogOutClick, setFavesArray, titles}) {
  //  console.log(titles)
  // once titles.length >0
      const bookComponentArray = titles.map(b=> <BookList setFavesArray={setFavesArray}  key={b.id}  b={b}/>)
     
      // const favesArray= [...title, newArray]
  return (
    <div>Home
    <Nav handleLogOutClick={handleLogOutClick} />
    <BookMapper  />
    {/* <BookList titles={titles} /> */}
    <FavoriteList   />
    {bookComponentArray}
    </div>
  )
}

export default Home