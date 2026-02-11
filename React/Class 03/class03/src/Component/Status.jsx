import React from 'react'

function Status({isOnline}) {
  return (
    <div>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}

export default Status
