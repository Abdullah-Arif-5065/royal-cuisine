import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './meals.css'

const Meals = () => {
    const [item, setitem] = useState([])
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res) => { 
            setitem(res.data.meals)
        })
        .catch((err) =>{
            console.log(err)
        })
    })

    const itemList = item.map(({strMeal, strMealThumb, idMeal}) => {
       return(
         <section className="card">
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
       )
    })
  return (
    <div>
        <h1 className="page-title">Royal Cuisine</h1>
        <div className='item_container'>{itemList}</div>
    </div>
    
  )
}

export default Meals