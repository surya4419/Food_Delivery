import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/Storecontext.jsx'


//wrapping storeContextProvider will ensure that all components within your app can access the context
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StoreContextProvider>
    <App />
   </StoreContextProvider>
 </BrowserRouter>
   
 
)
