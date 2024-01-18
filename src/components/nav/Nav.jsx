import React, { useState } from 'react'
import miLogo from '../../assets/logo.png';
import "./_Nav.scss";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className=".nav_logo">
          <img className='logo' src={miLogo} alt="logo"/>
        </div>

        <div className={`nav_items ${isOpen && "open"}`}>
            <button className='nav-btn'>inicio</button>
            <button className='nav-btn'>productos</button>
            <button className='nav-btn'>diseños</button>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Nav