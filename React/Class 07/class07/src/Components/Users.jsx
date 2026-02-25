import React, { useEffect, useState } from 'react'

function Users() {

    // const [users , setUsers] = useState([]);
    const [posts , setPosts] = useState([]);

    const [count , setCount] = useState(0);

    // wrong way to fetch data!

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => setUsers(data))

    // console.log(users);

    // useEffect(()=>{
    //      fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => setUsers(data))
    // }, [])


    // useEffect(()=>{
    //     async function fetchData() {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data = await res.json();
    //         setPosts(data)
    //     }


    //     fetchData();
    // }, [])

    // console.log(posts);

    // useEffect(()=>{
    //     setCount(count + 1)
    // }, [count])
    
    // console.log(count);


    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         console.log("Running...");
            
    //     }, 1000);


    //     return () =>{
    //         clearInterval(interval);
    //         console.log("Cleanup Done");;
            
    //     }
    // }, [])

    // [] ==> mount 
    // [state] ==> update 
    // return cleanup => unmount 
    

  return (
    <div>
      
    {/* {users.map(user => (
        <p key={user.id}>{user.name}</p>

    ))} */}



    </div>
  )
}

export default Users
