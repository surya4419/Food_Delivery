import React from 'react'
import './Nav.css'
import {assets} from '../../assets/assets'

const Nav = () => {
  return (
    <div className='navbar'>
       <img className='logo' src={assets.logo} alt="" />
       <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Nav