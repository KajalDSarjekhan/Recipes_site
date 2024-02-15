
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./AllProject/Project5 Recipe App/Home"
import About from "./AllProject/Project5 Recipe App/About"
import Search from "./AllProject/Project5 Recipe App/Search"
import Navbar from "./AllProject/Project5 Recipe App/Navbar"
import AboutMeals from './AllProject/Project5 Recipe App/AboutMeals'
import { useState } from 'react'

const App = ()=>{
    const [search,setSearch]=useState('b')
   
 return (
    <div>
       <BrowserRouter>
          <Navbar setSearch={setSearch}/>
         
          <Routes>
            <Route path="/" element={<Home search={search}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/aboutMeals" element={<AboutMeals search={search}/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
    
  
  );
}

export  default  App;
