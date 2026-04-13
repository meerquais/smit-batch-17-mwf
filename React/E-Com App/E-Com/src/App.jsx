import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { loadCart } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartPage from './pages/CartPage'
import Admin from './pages/Admin'
import Home from './pages/Home'



function App() {

  const dispatch = useDispatch();
  const {user} = useSelector((s)=>s.auth);


  useEffect(()=>{
    if(user){
      dispatch(loadCart(user.uid))
    }
  },[user])





  return (
    <>
    

    <Navbar />

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/' element={<ProtectedRoutes>
        <Home />
      </ProtectedRoutes>} />
      <Route path='/cart' element={<ProtectedRoutes>
        <CartPage />
      </ProtectedRoutes>} />

      <Route path='/admin' element={
        <Admin />}

      />


    </Routes>







    </>
  )
}

export default App