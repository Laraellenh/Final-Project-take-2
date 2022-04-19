import React from 'react'

function FaveNote({ handleChange, handleNote, note}) {

  return (
      <div>  
    <form 
    
    type="submit"
      onSubmit={handleNote}  >
      <textarea rows={5} 
      
      onChange={handleChange}
        placeholder=" your note about this title" 
        value={note} />
        <button> submit your note</button> 
    </form>
    </div>
  )
}

export default FaveNote