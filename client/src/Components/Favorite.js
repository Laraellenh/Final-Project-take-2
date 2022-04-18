import React from 'react'
import {useState} from 'react'


function Favorite({f}) {
  const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){

    setMarkasRead((read)=>!read)
  }
  console.log(f)
  const l = f.map(singleBookObj=>{
    const obj= singleBookObj.book.title
   return ( <ul >{obj}  <button onClick={handleMarkAsRead}> {read ? "Mark as read" : "Mark as unread"}
   </button>{} </ul>
    )
  })
   
  return (
    <div> Your Favorites {l}
     
      
    
  </div>
  )
}

export default Favorite