import React from 'react'
import {NavLink} from "react-router-dom";
import cartimg from "../images/logo.jpeg"


const Header = () => {
  return <>
   <header>
     <div className="container-header">
   <nav>
   <div className="navv">
   <img src={cartimg} className="cartimg" alt="img" />
   <span className='spp'>SHOP NOW</span>
   </div>
        <ul className="ull">
          {/* <span className='sp'><i className="zmdi zmdi-shopping-cart"></i>SHOP NOW</span> */}
          <li><NavLink style = {{textDecoration: 'none'}} to="/">Home</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/Register">Register</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/Login">Login</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/Cart">Products</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/About">AboutUs</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/Contact">ContactUs</NavLink></li>

        </ul>
  </nav>
  
  
  
  </div>
</header>

</>
}

export default Header