import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-center m-5 gap-5'>

     <ul>

     <li>
      <Link to={"login"}>Login</Link>
     </li>

     </ul>

      <ul>

      <li>
        <Link to={"registered"}>Registered</Link>
        </li>

     </ul>    
    </nav>      

    </>
  )
}

export default Navbar