import React, { useState } from 'react'

function Count() {

        const [count , setCount] = useState(0)

  return (
    <div>
      <h1 onClick={()=>{
        setCount(count + 1)
      }}>
        {count}
      </h1>
    </div>
  )
}

export default Count
