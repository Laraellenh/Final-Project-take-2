import React from 'react'
import {useState} from 'react'
import FaveNote from './FaveNote'




function Favorite({f, note, setNote, handleDeleteItem, setFavorites, favorites}) {
   console.log(f)
   console.log(favorites)
  

    function handleChange(e){
     setNote(e.target.value)
    }
    
   function handleNote(e){
    e.preventDefault()
    
    const formInput = {
        note: note,
        book: f.book
    }
 
 
    
      // setFavorites(formInput,...favorites)
    
      fetch(`/favorite_books/${f.book.id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify(formInput)
           
      })
  
      .then(r=>r.json())
      .then(note=>{
        console.log(note)
        setNote(note)
       
      })
  e.target.reset()
    }
  const [read, setMarkasRead] = useState(true)
 
  function handleMarkAsRead(){
    setMarkasRead((read)=>!read)
  }

 
  return (
    <div className='nav'> 
        
        <p
         className='favelist'
         >
          {f.book.title} 
        <button onClick={handleMarkAsRead}> {read ? "Mark as read" : "Mark as unread"} </button> 
        <h1> </h1>
        <h3> {f.note} </h3> 
        {/* <textarea rows={3} onChange={handleChange}> "leave your thoughts on this title" </textarea> */}
        {/* <button > </button>  */}
        {/* <FaveNote 
        // setFavorites={setFavorites} 
        // note={note} 
         handleChange={handleChange} note={note} handleNote={handleNote}></FaveNote>
        <button  className="remove" onClick={handleDeleteItem}> Delete title</button> */}
        <form 
          
          type="submit"
            onSubmit={handleNote}  >
            <textarea rows={6} 
            
            onChange={handleChange}
              placeholder=" your note about this title" 
          
              />
              <button > submit your note</button> 
          </form>
        </p>
      
    
  </div>
  )
}

export default Favorite