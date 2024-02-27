import React from 'react'
import './footer.css'
import ll from '../assets/ll.png'
import instagram from '../assets/instagram.png'
import pinterest from '../assets/pinterest.png'
import whatsapp from '../assets/whatsapp.png'

function Footer() {
  return (
    <div className='footer'>
      
      <div className="footer_logo">
        <img src={ll} alt="" />
        <p>Shop Me</p>
      </div>

      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer_social_icons">

        <div className="footer_icons">
          <img src={instagram} alt="" />
        </div>
        <div className="footer_icons">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer_icons">
          <img src={whatsapp} alt="" />
        </div>

      </div>

      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
