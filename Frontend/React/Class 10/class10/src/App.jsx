import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Cart'
import { Link, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

  // const initialState = {
  //   user:null,
  //   isLoggedIn: false
  // };


  // const [state , dispatch] = useReducer(reducer , initialState);




  // function reducer(state , action){

  //   switch (action.type){
  //     case "login":
  //       return {
  //         user:action.payload,
  //         isLoggedIn: true
  //       }
  //     case "logout":
  //       return initialState;
  //     default:
  //       return state
  //   }


  // }





  return (
    <>
     {/* <h2>Auth System!</h2> */}
{/* 

    {state.isLoggedIn ? (
      <div>
      <p>welcome {state.user}</p>
      <button onClick={()=>{
        dispatch({type:"logout"})
      }}>Logout</button>
      </div>
    ) : (

      <button onClick={()=>{
        dispatch({type: "login" , payload:"meer"})
      }}>Login</button>

    )
  
  } */}


  {/* <Cart /> */}
  {/* <h1>Hello World!</h1> */}


    <Routes>
      <Route  path='/cart' element={<Cart />}  />
      <Route  path='/about' element={<About />}  />
      <Route  path='/contact' element={<Contact />}  />
    </Routes>


    <Link to={"/cart"} >Cart</Link>
    <Link to={"/about"} >About</Link>
    <Link to={"/contact"} >Contact</Link>



    </>
  )
}

export default App
