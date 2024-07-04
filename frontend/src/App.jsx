import React, { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx' 
import Cart from './pages/Cart/Cart.jsx'
import Placeorder from './pages/Placeorder/Placeorder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/Verify/Verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'

const App = () => {

  const [showLogin, setShowLogin ] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />  
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Order' element={<Placeorder/>} />
         <Route path='/Verify' element={<Verify/>}/>
         <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
      <Footer />
    </>
  )
}

export default App

