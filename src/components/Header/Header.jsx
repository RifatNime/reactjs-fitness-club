import React from 'react';
import './Header.css';
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className='header'>

        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li className=''>Home</li>
            <li className=''>Programs</li>
            <li className=''>Why Us</li>
            <li className=''>Our Plans</li>
            <li className=''>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header