import React from 'react'
import './offers.css'
import exclusive from '../assets/exclusive.png'

function Offers() {
  return (
    <div className='offers'>

      <div className="offer_left">

        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button>Check Now</button>

      </div>
      
      <div className="offer_right">

        <img src={exclusive} alt="" />

      </div>

    </div>
  )
}

export default Offers
