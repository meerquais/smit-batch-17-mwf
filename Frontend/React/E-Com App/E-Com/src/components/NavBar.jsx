import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutUser } from '../features/auth/authSlice';

function NavBar() {

    const {user} = useSelector(s => s.auth);
    const dispatch = useDispatch();



  return (
    <>
    
    <div className='bg-blue-600 text-white p-4 flex justify-between'>
        <div className='flex gap-4'>

            <Link to="/" >Home</Link>
            {user && <Link to="/cart">Cart</Link>}
        </div>

        {user && (
            <button onClick={()=>{
                dispatch(logoutUser())
            }}>Logout</button>
        )}



    </div>
    
    
    
    
    </>
  )
}

export default NavBar
