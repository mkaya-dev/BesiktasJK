import React from 'react'
import "../Pages/All.css"
import logo from "../Images/png.png"

const Navbar = () => {
  return (
    <>
    <nav>
        <h5><img src={logo} style={{width:90}} /></h5>
        <ul>
            <li>Anasayfa</li>
            <li>City</li>
        </ul>
    </nav>
    </>
  )
}

export  default Navbar;
