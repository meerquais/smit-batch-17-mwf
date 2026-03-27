import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      
        <nav>
            <Link to="/" >Home</Link> | <Link to="/about" >About</Link> |
            <Link to="/dashboard">Dashboard</Link>
        </nav>

        <main>
            {/* Yahan children routes render honge  */}
            <Outlet /> 
        </main>


    </div>
  )
}

export default Layout
