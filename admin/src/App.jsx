import React from 'react'
import Nav from './components/nav/Nav'
import Sidebar from './components/sidebar/sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from'./pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   

const App = () => {

    const url = "https://pumatobackend.onrender.com"

  return (
    <div>
      <ToastContainer/>
     <Nav/>
     <hr />
     <div className="app-content">
     <Sidebar/>
     <Routes>
      <Route path='/add' element={<Add url={url}/>}/>
      <Route path='/list' element={<List url={url}/>}/>
      <Route path='/orders' element={<Order url={url}/>}/>
     </Routes>
     </div>
    </div>
  )
}

export default App
