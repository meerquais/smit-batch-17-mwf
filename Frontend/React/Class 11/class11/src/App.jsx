import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import User from './Components/User'

function App() {
  
  return (
    <>
  
{/*     
      <Navbar />



      <Routes>

      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/dashboard' element={ <Dashboard />} />

      </Routes> */}


      <h1>My Web</h1>

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
      </nav>



      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />


      </Routes> */}



       




      {/* </Routes> */}


      {/* <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}/>


      </Routes> */}

      {/* <Routes >

          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<User />} />

      </Routes> */}

  <Routes>

        <Route path='/dashboard' element={<Dashboard />}>

        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
        

      </Route> 

      </Routes>


    </>
  )
}

export default App
