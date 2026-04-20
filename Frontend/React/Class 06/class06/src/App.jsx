import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import Box from './Components/Box'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Count from './Components/Count'

function App() {
  const [count, setCount] = useState(0)

//  useEffect(()=>{
//   console.log("Effect run huwa");
  
//  }, []);

const isLoggedIn = true;


//  const users = ["Ali" , "Farman" , "Ahrar" , "Ubaid" , "Mujtaba"];

  return (
    <>
     {/* <button onClick={clickMe}>Click</button> */}

     {/* <Button text={"Submit"} backgroud={"red"} color={"white"}  />
     <Button text={"Login"} backgroud={"blue"} color={"white"} /> */}

     {/* <Box active={true} /> */}

      {/* {users.map(user => <p key={user}>{user}</p>)} */}

      {/* {isLoggedIn ? <Dashboard /> : <Login />} */}

      <Count />




    </>
  )
}

export default App
