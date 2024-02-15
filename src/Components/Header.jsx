import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const[randomFood,setrandomFood]=useState([])
    useEffect(()=>
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>res.json())
        .then(d=>setrandomFood(d.meals))
    },[])
  return (
    <div className='header'>
{
    randomFood.map((item)=>{
        return(
            <section className="Headersec" key={item.idMeal}>
                <div className='rights' >
                    <h1 className='h11' style={{ fontSize:'60px'}}>Today's Special </h1><br></br>
                    <h1 className='h11' style={{color:'orangered', fontSize:'40px'}}>{item.strMeal}</h1>
                    <h1 style={{ fontSize:'50px'}}>{item.strCategory}</h1>
                </div>
                <div className='lefts'>
                    <img src={item.strMealThumb} height={'300px'} width={'300px'}/>
                </div>
            </section>
        )
    })
}
    </div>
  )
}

export default Header