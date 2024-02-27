import React from 'react'
import { Link } from 'react-router-dom'
import './items.css'

function Items(props) {
  return (
    <div className='items'>
      
     {/* <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>  */}
     <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 

     


      <p>{props.name}</p>

      <div className="item_prices">
        <div className="new_price">
            ${props.new_price}
        </div>
        <div className="old_price">
            ${props.old_price}
        </div>
      </div>

    </div>
  )
}

export default Items
