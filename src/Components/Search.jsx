import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = ()=>{
    return (
       <div className="App">
            <nav className="nav">
                <article className="navbar">
                    <Link to={'./'} className="link">Home</Link>  
                    <Link to={'./about'} className="link">About</Link>
                    <Link to={'./search'} className="link">Search</Link>
                </article>
               
            </nav>
           
       </div>
       
     
     );
   }
   
   export default Navbar;