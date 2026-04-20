import React from 'react'

function Child({send}) {

    const studentName = {
        name:"Ahrar",
        age:13,
    }


  return (
    <div>
      <button onClick={()=>send([1,2,3,4,5])}>Send User</button>
    </div>
  )
}

export default Child
