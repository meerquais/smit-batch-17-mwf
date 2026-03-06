import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // syntax 

  // const [state , dispatch] = useReducer(reducer , initialState);

  // function reducer(state,action){
  //   switch(action.type){case "something":return }
  // }

  // const initialState = {
  //   count:0
  // };

  // function reducer(state,action){
  //   switch (action.type){
  //     case "increase" :
  //       return {
  //         count: state.count + 1
  //       };
  //       case "decrease":
  //         return {
  //           count: state.count - 1
  //         };
  //       case "reset":
  //         return initialState;
  //       default: return state;
  //   }
  // }


  // const [state,dispatch] = useReducer(reducer, initialState);


  const initialState = {
    todos: []
  };

  function reducer(state , action){
    switch(action.type){
      case "add":
        return {
          todos: [...state.todos, {
            id: Date.now(), text:action.payload
          }]
        };
      case "delete":
        return{
          todos: state.todos.filter(t => t.id !== action.payload)
        };
        default:
          return state;
    }
  }


  const [state,dispatch]= useReducer(reducer,initialState);

  const [input , setInput] = useState("");






  return (
    <>
      {/* <h2>Counter</h2>
      <p>{state.count}</p>

      <button onClick={()=>{
        dispatch({type: "increase"})
      }}>+</button>
      <button onClick={()=>{
        dispatch({type: "decrease"})
      }}>-</button>
      <button onClick={()=>{
        dispatch({type: "reset"})
      }}>Reset</button> */}



    <h2>Todo App</h2>

    <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
    }} />

    <button onClick={()=>{
      dispatch({type:"add", payload:input});
      setInput("");
    }} >Add</button>
    

    {state.todos.map(todo =>(
      <div key={todo.id}>
        {todo.text}
        <button onClick={()=>{
      dispatch({type:"delete", payload:todo.id});
    }}>Delete</button>
      </div>
    ))}






    </>
  )
}

export default App
