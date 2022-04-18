import React from 'react'
import {useState} from 'react'
import Fave from './Fave'


function Favorite({f}) {
  const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){

    setMarkasRead((read)=>!read)
  }
  console.log(f)
 
//   if (f){
//    f[0].map(singleBookObj=>{
//     const obj= singleBookObj.book.title
//    return ( <Fave obj={obj} >{obj}   </Fave>
//     )
//   })}
   
  return (
    <div> 
         
        <ul>{f.book.title} <button onClick={handleMarkAsRead}> {read ? "Mark as read" : "Mark as unread"} </button></ul>
      
    
  </div>
  )
}

export default Favorite