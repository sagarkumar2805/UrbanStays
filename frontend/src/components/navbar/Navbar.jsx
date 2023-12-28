import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <div>
      <div style={{backgroundColor:"black"}}>
        <img src={logo} alt="logo" style={{height:"30px"}}/>

      </div>
    </div>
  )
}

export default Navbar