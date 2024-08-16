import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'; 
import Cart from './pages/Cart/Cart.jsx';
import Placeorder from './pages/Placeorder/Placeorder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
import Verify from './pages/Verify/Verify.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Mobileapp from './pages/Mobileapp/Mobileapp.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import Profile from './pages/Profile/Profile.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Handle search results passed from Navbar
  const handleSearch = (results) => {
    if (Array.isArray(results)) {
      setSearchResults(results);
    } else {
      console.error('Expected results to be an array but received:', results);
      setSearchResults([]); // Reset to empty array if the format is incorrect
    }
  };

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} onSearch={handleSearch} />  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Placeorder />} />
          <Route path='/Verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/mobileapp' element={<Mobileapp />} />
          <Route path='/search' element={<SearchResults results={searchResults} />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
