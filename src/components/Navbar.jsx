import React  from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
function Navbar() {
  return ( 
    <div className='max-w-screen-sm sm:w-screen backdrop-grayscale-1 bg-zinc-300/20  max-w-screen text-zinc-600 flex items-center justify-between mx-auto py-3 '>
        <div className='text-white font-semibold text-[1.5vw] pl-5 font-rubik'>MOMOLAND</div>
        <div className=' flex shrink  justify-between items-center text-white text-md '>
           <NavLink to="/" className={({isActive})=>`px-5 ${isActive?"text-black":""}` } >Home</NavLink>
           <NavLink to="/about" className={({isActive})=>`px-5 ${isActive?"text-black":""}` } >About</NavLink>
           <NavLink to="/login" className={({isActive})=>`px-5 ${isActive?"text-black":""}` }  >Login</NavLink>
        </div>

    

    </div>
  

  )
}

export default Navbar