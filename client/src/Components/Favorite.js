import React from 'react'
import {useState} from 'react'




function Favorite({f, handleDeleteItem}) {
    // function handleDeleteFave(deletedItem) {
    //     const updatedItems = favorites.filter((deletedItem) => f.id !== deletedItem.id);
    //     setFavorites(updatedItems);
    //   }
    
     
  const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){

    setMarkasRead((read)=>!read)
 }

  console.log(f)
 
  return (
    <div> 
        
        <ul className='favelist'>
          {f.book.title} 
        <button onClick={handleMarkAsRead}> {read ?  "Mark as read" : "Mark as unread"} </button> 
        {/* <button  className="remove" onClick={handleDeleteItem}> Delete title</button> */}
        </ul>
      
    
  </div>
  )
}

export default Favorite