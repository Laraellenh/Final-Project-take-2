
import React, {useState} from 'react'
import FavoriteList from './FavoriteList'

function Booklist({setFavesArray, b, favesArray, favesList, setFavesList}) {

  const [faveTitle, setFaveTitle] = useState({})
  // console.log(b)
// fave titles set to state, and added to the array from App
  // const [faveTitle, setFaveTitle] = useState([])
  // console.log( "faveTitle", faveTitle)
  // const entryObj = title.entries 
  // console.log(titles)
  // const allTitlesInStateArray = titles.map(b=>{ return (<Book key={b.id} b={b}/>)})
  // const [bookArray] = title.map((b)=>key={)
  // const bookObj=title.entries
  // console.log(bookObj)
  // // const bookArray = bookObj.map(book=>{console.log(book)})
 
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
      // console.log("favetitle", faveTitle)
      // console.log(newTitle)
      setFavesArray(favesArray=>[ newTitle, ...favesArray])
      setFaveTitle(faveTitle)
      
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