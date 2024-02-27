import React from 'react'
import './header.css'
import { MdOutlineWavingHand } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import p1 from '../assets/p1.png'

function Header() {
  return (
    <div className='hero'>

        <div className="hero_left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand_icon">
              <p>new</p>
              <MdOutlineWavingHand className='hand' />
            </div>
            <p>collections</p>
            <p>for eeryone</p>  
          </div>
          
          <div className="hero_latest_btn">
            <div>Latest Collection</div>
            <FaLongArrowAltRight className="arrow_icon" />
          </div>

        </div>


        <div className="hero_right">
            <img src={p1} alt="" />
        </div>

      
    </div>
  )
}

export default Header
