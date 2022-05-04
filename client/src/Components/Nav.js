
import {Link} from "react-router-dom";

function Nav({ handleLogOutClick, user}) {


    return (
        <> 
   
         <h1> Welcome to Your Kurt Vonnegut Reading Planner </h1>
         <h2> Click on the titles you've read or want to read to keep a master list</h2>
         <div className="nav">
            <button onClick={handleLogOutClick}> Logout </button>
           <Link to ='/mylist' >  <button > See Your Reading List</button> </Link>
           <Link to ='/home' > <button > Head Home </button> </Link>
        

         </div>

        </>
    )
}

export default Nav;