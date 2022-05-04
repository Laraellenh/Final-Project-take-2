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
          Book title: {f.book.title} 
        <button onClick={handleMarkAsRead}> {
        read ? "Mark as read" : "Mark as unread"} </button> 
        <h1> </h1>
        <h3 style={{borderColor: "#f7d6b5",
              fontFamily: 'bangers',
              fontSize: '20px',
              display: "block",
              color: 'hotpink'}}> Your notes on this title: </h3> 
              <h3 style={{
                
              fontFamily: 'bangers',
              fontSize: '16px',
              display: "block",
              fontStyle: "italic",
              color: '#61dafb'}}> {f.note}</h3>
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
            <textarea 
            
            rows={5} 
            style={{
            display: 'block',
            borderColor: "#f7d6b5",
            fontFamily: 'bangers',
            width: '500px',
            fontSize: '20px',
            color: '#f27279'}}
            onChange={handleChange}
              placeholder=" type your note about this title" 
          
              />
              <button > submit your note</button> 
          </form>
        </p>
      
    
  </div>
  )
}

export default Favorite