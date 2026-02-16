import React from 'react'

function Add({setCount}) {
  return (
    <div>
      <button onClick={()=>{
       return setCount(count => count + 1)
      }}>+</button>
    </div>
  )
}

export default Add
