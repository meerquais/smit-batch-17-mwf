import React from 'react'

function Child({sendData}) {

    const message = "This is a message from child to parent";
  return (
    <div>
      <button onClick={()=>{
        sendData(message)
      }} >Send Data</button>
    </div>
  )
}

export default Child
