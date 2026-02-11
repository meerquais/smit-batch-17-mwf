import React from 'react'

function Profile({user}) {
  return (
    <div>
      
    <h2>{user.name}</h2>
    <p>{user.age}</p>

    </div>
  )
}

export default Profile
