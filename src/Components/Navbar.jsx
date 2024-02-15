import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = ({setSearch})=>{
    return (
       <div className="App">
            <nav className="nav">
            <article className="navbar">
<img src="https://media.istockphoto.com/id/1201391899/vector/indian-traditional-india-cuisine-food-menu.jpg?s=2048x2048&w=is&k=20&c=iA3jrRkg9VEKYUPwCmVOHgS4SKQaQBV_qUchcXEEIic="  />
                    <Link to={'/'} className="link1">Home </Link>
                 
                    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Enter dish name " />
                    
                </article>
                </nav>
           
           
       </div>
       
     
     );
   }
   
   export default Navbar;