import Button from "./Components/Button";
import Status from "./Components/Status"
import Welcome from "./Components/Welcome"



function App() {
  
  // const list = [

  //   {
  //     title:"React",
  //     url: "https://facebook.github.io/react/",
  //     author: "Jordan Walke",
  //     num_comments:3,
  //     points: 4,
  //     objectID:0,
  //   },
  //   {
  //     title:"Redux",
  //     url: "https://github.com/reactjs/redux",
  //     author: "Dan Abramov , Andrew clark",
  //     num_comments:2,
  //     points: 5,
  //     objectID:1,
  //   }

  // ]

  function add(a,b){

  }

  const studentName = "Meer Quais";

  function handleClick(){
    alert("Button Clicked!");
  }
  
  

  return (
   <>
   
    {/* {list.map(function(item){
      return(
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      )
    })} */}

{/* 
    {list.map((item)=>(
       <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
    ))} */}


    {/* <Welcome />
    <Welcome name="Ali" age={20} />
    <Welcome name="Meer" age={23} />
    <Welcome name="Minhaj" age={27} /> */}

    <Welcome name={studentName} age={26}  />

      <Status isOnline={false} />

      <Button onClick={handleClick} />
   </>
  )
}

export default App
