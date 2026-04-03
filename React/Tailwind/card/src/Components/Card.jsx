import React from 'react'
import { FaImage } from "react-icons/fa";

function Card() {
  return (
    <>
    
        <div className='ml-52 bg-white w-52 p-4 h-44 rounded-xl'>
            <div className='bg-pink-300 w-44 h-28 flex justify-center rounded-xl align-middle'>
                <FaImage className='h-28' />
            </div>
            <div className='mt-3 w-34 h-3 rounded-xl bg-pink-300'>

            </div>
            <div className='mt-1 w-28 h-3 rounded-xl bg-pink-300'>

            </div>
        </div>


    
    </>
    
)
}

export default Card
