import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Payment from '../pages/Payment'
import Pay from '../pages/Pay'

const Routers = () => {
  return <Routes>
  <Route path='/' element={<Navigate to='/register'/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/foods' element={<AllFoods/>}/>
  <Route path='/foods/:id' element={<FoodDetails/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/payment' element={<Payment/>}/>
  <Route path='/pay' element={<Pay/>}/>
  
  </Routes>
}

export default Routers