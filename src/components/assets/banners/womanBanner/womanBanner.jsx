import React from 'react'
import './womanBanner.css'
import woman_banner from '../woman_banner.png'

function WomanBanner() {
  return (
    <div className='man_banner'>

        <div className="man_banner_left">

            <h1>FLAT 50% OFF</h1>
            <p><span>12</span> Hours <span>20</span> Mins</p>

            <button>Explore Now</button>

        </div>

        <div className="man_banner_right">

            <img src={woman_banner} alt="" />

        </div>
      
    </div>
  )
}

export default WomanBanner
