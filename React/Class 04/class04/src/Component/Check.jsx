import React, { useState } from 'react'

function Check() {

    const [check , setCheck] = useState(false);
  return (
    <div>
      <input type="checkbox" checked={check} onChange={(e)=>{
        setCheck(e.target.value)
      }} />
    </div>
  )
}

export default Check
