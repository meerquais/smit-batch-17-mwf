import { useState } from 'react'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import Child from './Components/Child'
import Card from './Components/Card'
import Layout from './Components/Layout'
import Button from './Components/Button'
import Display from './Components/Display'
import Add from './Components/Add'



function App() {

  // function remove(){
  //   console.log("Remove");
  // }
  // function add(){
  //   console.log("add");
    
  // }

  const [ count , setCount] = useState(0);
 

  return (
    <>
     {/* <Hello />
     <Counter />

    <Child age={23} />



    <Card>
      <Hello />
      <p>Hello class!</p>
    </Card> */}

    {/* <Layout header={<Hello />}  body={<p>Welcome</p>} /> */}

    {/* <Button text='Remove' onClick={remove} />
    <Button text='add' onClick={add} /> */}

    <Display count={count} />
    <Add setCount={setCount} />

    </>
  )
}

export default App
