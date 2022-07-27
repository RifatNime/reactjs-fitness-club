import React from 'react';
import './Header.css';
import Logo from "../../assets/logo.png"

const Header = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className='header topnav" id="myTopnav"'>

      <img src={Logo} alt="" className='logo' />
      <ul className='header-menu'>
        <li href="#home" className="active">Home</li>
        <li href="#home">Programs</li>
        <li href="#home">Why Us</li>
        <li href="#home">Our Plans</li>
        <li href="#home">Testimonials</li>
        <a href="javascript:void(0);" className="icon" style={{color: 'white'}} onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </ul>
    </div>
  )
}

export default Header