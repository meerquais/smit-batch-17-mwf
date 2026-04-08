// import React from 'react'
// import { useDispatch , useSelector } from 'react-redux'
// import { increment , decrement , addByAmount } from './features/couter/counterSlice'

// function App() {



//   // 1.Store
//   // ==> Global State Container 
//   // 2.Slice
//   // ==> State + reducers + actions ek jagah 
//   // 3.Reducer 
//   // ==> state ko update karta hai 
//   // 4.Action 
//   // ==> woh event hai jo state charge karta hai 
//   // 5.Dispatch
//   // ==> Action bejta hai
//   // 6.Selector
//   // ==> store se data leta hai.



//   const count = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();




//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{
//         dispatch(increment())
//       }} >+</button>
//       <button  onClick={()=>{
//         dispatch(decrement())
//       }}>-</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(5))
//       }}>Add 5</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(50))
//       }}>Add 50</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(500))
//       }}>Add 500</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(5000))
//       }}>Add 5000</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(50000))
//       }}>Add 50000</button>
//       <button onClick={()=>{
//         dispatch(addByAmount(-50000))
//       }}>remove 50000</button>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import { addTodo , deleteTodo } from './features/todo/todoSlice'

// function App() {

//   const [text,setText] = useState("");
//   const todos = useSelector(state => state.todos)
//   const dispatch = useDispatch();


//   return (
//     <>

//       <input type="text" onChange={(e)=>{
//         setText(e.target.value)
//       }} />
//       <button onClick={()=>{
//         dispatch(addTodo({id:Date.now(), text}))
//       }} >Add</button>

//       {todos.map(todo =>(
//         <div key={todo.id}>

//           {todo.text}
//           <button onClick={()=>{
//             dispatch(deleteTodo(todo.id))
//           }}>Delete</button>

//         </div>
//       ))}
    
    
    
    
    
//     </>
//   )
// }

// export default App


import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { fetchPosts } from './features/post/postsSlice';

function App() {

  const dispatch = useDispatch();
  const {posts, loading } = useSelector(state => state.posts);



  return (
    <div>


    <button onClick={()=>{
      dispatch(fetchPosts())
    }}>Load Posts</button>

    {loading && <p>Loading....</p>}

    
    {posts.map(p =>(
       <p key={p.id} > {p.title} </p>
    ))}
  



    </div>
  )
}

export default App

