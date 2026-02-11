import React from 'react'

function Title({text = "Default Title"}) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Title
