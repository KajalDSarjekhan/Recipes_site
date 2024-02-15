
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Search from "./Components/Search"
import Navbar from "./Components/Navbar"
import AboutMeals from './Components/AboutMeals'
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
