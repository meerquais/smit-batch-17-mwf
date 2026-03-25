import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/profile'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import Home from './Pages/Home'
import User from './Component/User'
import Product from './Pages/Product'
import ProfileDetails from './Component/ProfileDetails'

function App() {


  return (
    <>
      
      <h1>Hello World!</h1>


      {/* <Routes>

      <Route path='/about' element={<About />} />

      </Routes>

    
    <Link to="/about" >About</Link> */}



        {/* <Routes> */}

        {/* <Route path='/dashboard' element={<Dashboard />}>


        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
       




        </Route> */}


          {/* <Route path='dashboard' element={<Dashboard />}>
          
          
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
            
          
          
          </Route>

        </Routes> */}



            {/* <Routes>

            <Route path='/dashboard' element={<Dashboard />} />

            </Routes>


            <Login /> */}


            {/* <Routes>

              <Route path='/home' element={<Home />} />

              <Route path='/user/:id' element={<User />} />

            </Routes> */}


            <Routes>

              <Route path='/products' element={<Product />} />

              <Route  path='/product/:id' element={<ProfileDetails />}/>




            </Routes>




      
    </>
  )
}

export default App
