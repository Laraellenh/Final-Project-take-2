import React from 'react'
import {useState} from 'react'

export default function Fave({obj}) {
    const [read, setMarkasRead] = useState(true)
  function handleMarkAsRead(){

    setMarkasRead((read)=>!read)}


  return (
      <ul> {obj}
          <button onClick={handleMarkAsRead}> {read ? "Mark as read" : "Mark as unread"} </button>
      </ul>
    
  )
}
