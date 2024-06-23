import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/register.jsx'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products/Products.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Contact' element={<Contact/>}/>
     
      <Route path='Products' element={<Products/>}/>
  
      <Route path='Login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='Wishlist' element={<Wishlist/>}/>
      <Route path='Cart' element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  
)