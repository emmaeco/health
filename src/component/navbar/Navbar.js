import React from 'react'
import { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar = () => {

  const [Mobile, setMobile] = useState(true)   
  return (
    <>
      <div className='header__nav'>
          <div className='logo'>
            <h1>MEDIUCS</h1>
          </div>
          <nav>
            <ul className= {Mobile ? "nav-links-mobile": "nav-links"} onClick={() => setMobile(false)}>
                <li>
                  <Link to='/'>Home</Link>
                  
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
               
            </ul>
            <button className='mobile-menu-icon ' onClick={() =>setMobile(!Mobile)}>
                   {Mobile? <ImCross/>: <FaBars/>}</button>
          </nav>
        
      </div>
      
    </>
  )
}

export default Navbar