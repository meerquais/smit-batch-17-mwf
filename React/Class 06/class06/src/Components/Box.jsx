import React from 'react'

function Box({active}) {
  return (
    <div>
      <div style={{backgroundColor: active ? "green" : "gray"}} >
        box
      </div>
    </div>
  )
}

export default Box
