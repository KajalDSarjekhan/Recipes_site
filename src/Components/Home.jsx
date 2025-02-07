import { useEffect, useState } from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
import Header from "./Header"

const Home = ({search})=>{
    const [data,setData]=useState([])
    const [data2,setData2]=useState([])
   
    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res=>res.json())
      .then(d=>setData2(d.meals))
    },[data2] )

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>res.json())
        .then(d=>setData(d.categories))
    },[])
    const navigate =useNavigate()
    return (
       <div className="App">
       <Header/>
        <h1>Categories</h1>
        <section className="HomeSec">
          {data.map((item)=>{
            return(
                
                <div key={item.idCategory}>
                    <img src={item.strCategoryThumb} onClick={()=>navigate('./about',{state:{item}})}/>
                    <p>{item.strCategory}</p>
                </div>
                
                
            )
          })}
          </section>
          <h1>Meals</h1>
        <section className="HomeSec">
          {data2.map((item)=>{
            return(
                
                <div key={item.idMeal}>
                    <img src={item.strMealThumb} height={'300px'} width={'250px'} onClick={()=>navigate('./aboutmeals',{state:{item}})}/>
                    <p>{item.strMeal}</p>
                </div>
                
                
            )
          })}
          </section>
       </div>
       
     
     );
   }
   
   export default Home;
