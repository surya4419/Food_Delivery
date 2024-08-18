import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header' id='header' >
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
        <button ><Link to='/menu'>View Menu</Link></button>
      </div>
      
    </div>
  )
}

export default Header
