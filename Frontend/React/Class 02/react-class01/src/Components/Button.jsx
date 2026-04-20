import React from 'react'

function Button({onClick}) {
  return (
    <div>
      <button onClick={onClick}>Click Me!</button>
    </div>
  )
}

export default Button
