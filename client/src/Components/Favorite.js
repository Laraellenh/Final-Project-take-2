import React from 'react'
import {useState} from 'react'
import Fave from './Fave'


function Favorite({f}) {
  const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){

    setMarkasRead((read)=>!read)
  }
  console.log(f)
  const l = f.map(singleBookObj=>{
    const obj= singleBookObj.book.title
   return ( <Fave obj={obj} >{obj}   </Fave>
    )
  })
   
  return (
    <div> Your Favorites
         {l}
     
      
    
  </div>
  )
}

export default Favorite