import React, { useState } from 'react'
import './Navbar.css'



const Navbar = () => {
  const [menu,setMenu] = useState("Menu")
  return (
  
 
    <>
    <div className='navbar'>
      <div className="logo">
        <img src="../foodlogo.jpg" alt="" />
      </div>
      <div>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact-us</li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <div className='search'><img src="../search.webp" alt="" /></div> 
        <div className="basket"><img src="../basket.png" alt="" /> <div className='dot'></div></div>
        <button className='button'>Sign in</button>
        </div>
    </div>  
    </>
    
  )
}

export default Navbar
