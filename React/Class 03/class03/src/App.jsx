import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Component/Welcome'
import Age from './Component/Age'
import User from './Component/User'
import Status from './Component/Status'
import Button from './Component/Button'
import Profile from './Component/Profile'
import Skills from './Component/Skills'
import Card from './Component/Card'
import Title from './Component/Title'
import Child from './Component/Child'

function App() {


    // function add(a,b){
    //   return a + b
    // }

    // function handleClick(){
    //   alert("1st Button was clicked!")
    // }

    // function handleClick2(){
    //   alert("2nd Button was clicked!")
    // }

  // const user = {
  //   name:"Meer",
  //   age:26,
  // }


  // const skills = ["React" , "Js" , "CSS" , "HTML" , "Bootstrap" , "Github"]

  function getMessageFromChild(message){
    console.log("Child says: ", message);
    
  }



  
  return (
    <>


    {/* <Welcome name="Meer" /> */}
    {/* <Age age={25} /> */}
    {/* <User name="Meer" city="Karachi" /> */}

    {/* <Status isOnline={false} />
    <Button onClick={handleClick}  name={"Submit"} />
    <Button onClick={handleClick2}  name={"add"} />
       */}


      {/* <Profile user={user} /> */}

      {/* <Skills skills={skills} /> */}

{/* 
      <Card >
        <h1>Hello</h1>
        <p>This is inside card.</p>
      </Card>
      <Card>
        <h1>Hello React</h1>
        <p>This is another inside card.</p>
      </Card> */}
{/* 
      <Title text='The Great' />
      <Title/>


      <User city={"Karachi"} /> */}

  <Child sendData={getMessageFromChild} />

    </>
  )
}

export default App
