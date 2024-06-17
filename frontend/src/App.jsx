import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx' 
import Cart from './pages/Cart/Cart.jsx'
import Placeorder from './pages/Placeorder/Placeorder.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Order' element={<Placeorder/>} />
      </Routes>
    </div>
  )
}

export default App

