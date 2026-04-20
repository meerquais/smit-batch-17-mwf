import React from 'react'
import logo from '../assets/logo.svg'
import pk from "../assets/pk.png"

function NavBar() {
  return (
    <>

        <div className='flex justify-between align-middle'>

            <div className='flex gap-4 align-middle'>

            <div className='flex align-middle ms-1.5' >
               <img src={logo} width="200px" />
            </div>
            <div className='flex align-middle'>
                <ul className='flex gap-4 align-middle text-2xl'>
                    <li className=''>Pricing</li>
                    <li>Services</li>
                    <li>Explore</li>
                    <li>Support</li>
                    <li>1-Click OpenClaw</li>
                </ul>
            </div>
            </div>
            <div>
                <div className='flex align-middle'>
                    <div>
                        <img src={pk} alt="" />
                    </div>
                    <div >
                        English
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default NavBar
