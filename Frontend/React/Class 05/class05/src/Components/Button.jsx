import React from 'react'

function Button({text = "click" , onClick}) {
  return (
    <div>
      <button onClick={onClick} >{text}</button>
    </div>
  )
}

export default Button
