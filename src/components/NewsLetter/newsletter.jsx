import React from 'react'
import './newsletter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>

        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your E-mail ID'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
