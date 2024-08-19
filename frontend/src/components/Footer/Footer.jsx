import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <h2>PUMATO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui expedita a, ratione in dolor error, dicta odio pariatur totam, placeat nulla voluptatem maiores laudantium eaque dolorem temporibus dolores. Quam?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                   
                <li> <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>

                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@pumato.com</li>
                 </ul>
            </div>
          
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 0 Pumato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
