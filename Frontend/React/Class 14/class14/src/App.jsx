import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {

  // createContext()
  

  return (
    <>
     <Navbar />
     <Dashboard />
    </>
  )
}

export default App
