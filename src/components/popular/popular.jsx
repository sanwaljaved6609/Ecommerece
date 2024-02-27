import React from 'react'
import './popular.css'
import pop_women from '../assets/data'
import Items from '../items/items'

function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_items">
       
      {/* {myData.map((item, ) => (
          <div >
            <img src={item.image } alt='' />
            <h2>{item.name}</h2>
            <p>Old Price: ${item.old_price}</p>
            <p>New Price: ${item.new_price}</p>
          </div>
        ))} */}

        {pop_women.map((e)=>{
          return <Items image={e.image} name={e.name} new_price={e.new_price} old_price={e.old_price}  />
        })}
        
      </div>
    </div>
  )
}

export default Popular
