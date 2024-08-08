import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'> 
      
        <h1 className='h'>Hello everyone! Please make your favourite food's order here </h1>
        <p>Choose from a diverse menu that caters to every taste, featuring everything from international cuisines to local favorites. Our fast and reliable service ensures that your food arrives hot and fresh, thanks to our network of trusted drivers. With our user-friendly platform, ordering is a breeze—browse menus, customize your meals, and track your delivery effortlessly.</p>
        <p class='o'>Order now and taste the difference! </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
