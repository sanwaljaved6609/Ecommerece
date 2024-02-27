import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

import logo from '../assets/ll.png'
import { IoCartOutline } from "react-icons/io5";

function Navbar() {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>

        <div className="logo">
            <img src={logo} alt="" />
            <p>SHOP ME</p>
        </div>
        <ul className="navmenu">
            <li onClick={()=>{setMenu("shop")}}> <Link className='link' to='/'>Shop</Link> {menu==="shop"? <hr />:<></> } </li>
            <li onClick={()=>{setMenu("men")}}> <Link className='link' to='/men'>Men</Link> {menu==="men"? <hr />:<></> }</li>
            <li onClick={()=>{setMenu("women")}}> <Link className='link' to='/women'>Women</Link> {menu==="women"? <hr />:<></> }</li>
            <li onClick={()=>{setMenu("kids")}}> <Link className='link' to='kids'>Kids</Link> {menu==="kids"? <hr />:<></> }</li>
        </ul>
        <div className="login_cart">
            <Link className='link' to='/login'><button>Login</button></Link>
            <Link className='link' to='/cart'><IoCartOutline className="cart_icon" /></Link>
            <div className="cart_count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
