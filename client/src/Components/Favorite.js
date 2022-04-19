import React from 'react'
import {useState, useEffect} from 'react'




function Favorite({f, handleDeleteItem}) {
    // function handleDeleteFave(deletedItem) {
    //     const updatedItems = favorites.filter((deletedItem) => f.id !== deletedItem.id);
    //     setFavorites(updatedItems);
    //   }
    // function handleNote(e){
    //  setNote(e.target.value)
    // }
     
  const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){
    setMarkasRead((read)=>!read)
 }

//  const [note, setNote] = useEffect([])
//  useEffect(()=>{
//    fetch('/favorite_books', {
//      method: 'POST', 
//      headers: {
//        'Content-Type': 'application/json',
//      },
//        body: JSON.stringify(note)
      
//    })
//    .then(r=>r.json())
//    .then(note=>{
//      console.log(note)
//      setNote(note)
//    })
//  })
 
  return (
    <div> 
        
        <ul className='favelist'>
          {f.book.title} 
        <button onClick={handleMarkAsRead}> {read ?  "Mark as read" : "Mark as unread"} </button> 
        {/* <textarea onChange={handleNote}> "leave your thoughts on this title"<button onSubmit={note}/> </textarea> */}
        {/* <button  className="remove" onClick={handleDeleteItem}> Delete title</button> */}
        </ul>
      
    
  </div>
  )
}

export default Favorite