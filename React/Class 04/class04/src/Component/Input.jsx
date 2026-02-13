// import React from 'react'

// function Input({send}) {
//   return (
//     <div>
//       <input type="text" onChange={(e)=>{
//         return send(e.target.value)
//       }}/>
//     </div>
//   )
// }

// export default Input
import React, { use, useState } from 'react'

function Input({}) {
    const [text , setText] = useState("");
  return (
    <div>
     <input type="text" onChange={(e)=>{
        setText(e.target.value)
     }} />
     <p>{text}</p>
    </div>
  )
}

export default Input
