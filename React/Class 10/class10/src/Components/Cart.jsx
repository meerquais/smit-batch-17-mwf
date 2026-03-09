import React, { useReducer } from 'react'

function Cart() {

    const initialState = {
        cart:[]
    }



    const [state , dispatch] = useReducer(reducer,initialState)



    function reducer(state , action){
        switch(action.type){
            case "add":
                return{
                    cart: [...state.cart , action.payload]
                };

            case "clear":
                return initialState;
            default:
                return state
        }
    }



  return (
    <div>
        <h2>Shopping Cart</h2>

        <button onClick={()=>{
            dispatch({type:"add" , payload:"Laptop"})
        }}>Add Laptop</button>

        <button onClick={()=>{
            dispatch({type:"clear"})
        }}>Clear Cart</button>


        <ul>
            {state.cart.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Cart
