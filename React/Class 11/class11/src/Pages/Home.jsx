import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>This is Home Page</h2>
      <Link to="/user/1">User 1</Link>
      <br />
      <Link to="/user/2">User 2</Link>
      <br />
      <Link to="/user/3">User 3</Link>
    </div>
  )
}

export default Home
