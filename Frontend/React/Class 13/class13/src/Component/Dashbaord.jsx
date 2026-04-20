import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashbaord({setIsAuth}) {

  const navigate = useNavigate()

  const logout = ()=>{
    setIsAuth(false)
    navigate("/login")
  }



  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Dashbaord
