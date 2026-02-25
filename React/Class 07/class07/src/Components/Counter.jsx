import React, { useEffect, useState } from 'react'

function Counter() {

    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("Count Changed: " , count);
        
    }, [count])

  return (
    <div>
        <button onClick={()=>{
            setCount(count + 1)
        }}>{count}</button>
    </div>
  )
}

export default Counter
