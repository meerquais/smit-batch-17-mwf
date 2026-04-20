import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import About from './Component/About'
import Dashbaord from './Component/Dashbaord'
import Home from './Component/Home'
import Login from './Component/Login'
import ProtectedRoutes from './Component/ProtectedRoutes'
import Settings from './Component/Settings'

function App() {

  const [isAuth , setIsAuth] = useState(false);


  return (
    <>
   
      {/* <Routes>

        <Route path='/' element={ <Layout />} >

        <Route path='about'  element={<About />}     />
        <Route path='dashboard' element={ <Dashbaord />}  />

        </Route>

      </Routes> */}




      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />

        <Route path='/dashboard' element={<ProtectedRoutes isAuth={isAuth}>
          <Dashbaord setIsAuth={setIsAuth} />
        </ProtectedRoutes>} />

        <Route path='/settings' element={<ProtectedRoutes isAuth={isAuth}>
          <Settings />
        </ProtectedRoutes>} />


      </Routes>






    </>
  )
}

export default App
