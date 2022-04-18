
import {Link} from "react-router-dom";

function Nav({ handleLogOutClick, user}) {


    return (
        <> 
   
         <h1>Nerd Out Book List </h1>
         <div>
            <button onClick={handleLogOutClick}>Logout</button>
           <Link to ='/mylist' >  <button >See Your Reading List</button> </Link>
           {/* <h1><Link to="/"> Home</Link></h1> */}
           {/* {user&&user.admin?<h1><Link to="/" >Return Home</Link> </h1>:null} */}

         </div>

        </>
    )
}

export default Nav;