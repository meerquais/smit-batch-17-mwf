import React, { useState } from 'react'

function Counter() {

    // let count = 0

    // function add(){
    //     count++
    //     console.log(count);
        
    // }

    const [count , setCount] = useState(0);

    
  return (
    <div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>{count}+</button>
    </div>
  )
}

export default Counter
