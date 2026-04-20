import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToggle from './Hooks/useToggle'

function App() {
 
  // const inputRef = useRef(null);

  // const handleFocus = ()=>{
  //   inputRef.current.focus();
  // };


  // const [count , setCount] = useState(0);

  // const prevCountRef = useRef(0);


  // useEffect(()=>{
  //   prevCountRef.current = count
  // }, [count])


    // const clickRef = useRef(0);

    // const handleClick = ()=>{
    //   clickRef.current++;
    //   console.log("Clicked:" , clickRef.current);
      
    // };

    const [isOpen , toggleOpen] = useToggle(false);




  return (
    <>


    {/* <h2>Focus input example!</h2>
 
    <input type="text" ref={inputRef} placeholder='Type here..' />
    <button onClick={handleFocus}>Focus Input</button> */}
    

{/* 
      <h2>Previous Value</h2>

      <p>Current : {count}</p>
      <p>Previous Value: {prevCountRef.current}</p>


      <button onClick={()=>{
        setCount(count + 1)
      }}>+</button> */}

{/* 
      <h2>Ref Counter</h2>
      <button onClick={handleClick}>Click ME</button> */}


      <h2>UseToggle</h2>

      <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>

      {isOpen && <p>Modal content Visible</p>}

    </>
  )
}

export default App
