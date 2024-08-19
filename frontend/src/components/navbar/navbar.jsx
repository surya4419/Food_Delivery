import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets.js';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext.jsx';
import axios from 'axios';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [query, setQuery] = useState('');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pumatobackend.onrender.com/api/food/search?q=${encodeURIComponent(query)}`);
      navigate('/search', { state: { results: response.data } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src="logo2.jpeg" alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
       <li><Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link></li> 
        <Link to="/menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</Link>
        <Link to="/mobileapp" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</Link>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search'>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for food..."
            className="navbar-search-input"
          />
          <button onClick={handleSearch} className="navbar-search-button">Search</button>
        </div>
       
        <div className='navbar-cart'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div></Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={()=>navigate("/profile")}><img src={assets.logout_icon} alt="" /><p>profile</p></li>
             
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
