import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Users from './Components/Users'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(()=>{

  // } , [] );

  // works only on first render/ mounted for the first time!

  // useEffect(()=>{
  //   console.log("Component Mounted!");
    
  // } , [])


  // har render pe run karna

  // useEffect(()=>{
  //   console.log("Runs on every Render!");
    
  // })

  return (
    <>
      
      {/* <Counter /> */}

      <Users />
    </>
  )
}

export default App
