import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './Component/Child'
import Input from './Component/Input';
import Display from './Component/Display';
import Check from './Component/Check';

function App() {
  
    // function getUser(user){
    //   console.log(user);
      
    // }

  // let count = 0;

  // const [count , setCount] = useState(0)
  // const [text , setText] = useState("");

  // const [on , setOn] = useState(false);

  // const [user , setUser] = useState({
  //   name: "Ali"
  // })


  // const [items , setItems] = useState([])

  // const [show , setShow] = useState(true);

  // console.log(items);

  // const [value , setValue] = useState("")
  


  return (
    <>
      {/* <Child send={getUser} /> */}
      {/* <p>{count}</p>
      <button onClick={()=>{
      setCount(count + 1)
        
      }}>Count++</button> */}


      {/* <p>{text}</p>
      <input type="text" onChange={(e)=>{
          setText(e.target.value)
          console.log(text);
          
      }} /> */}

      {/* <button onClick={()=>{
        setOn(!on)
      }}>{on ? "On" : "Off"}</button> */}
{/* 
<button onClick={()=>{
  setUser({
    name:"Meer",
  })
}}>{user.name}</button> */}

 {/* <button onClick={()=>{
  setItems([...items , "New"])
  console.log(items);
  
 }}>Add</button> */}


{/* <button onClick={()=>{
  setShow(!show)
}} >{show && "Hello"}</button> */}

{/* 
  <Input send={setValue} />
  <Display value={value} /> */}


  {/* <Input /> */}

  <Check />


    </>
  )
}

export default App
