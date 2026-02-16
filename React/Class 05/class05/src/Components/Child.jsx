import React from 'react'

function Child({age}) {

    age = age + 1
  return (
    <div>
        <p>{age}</p>
      
    </div>
  )
}

export default Child
