import React  from 'react'

function Navbar() {
  return ( 
    <div className='max-w-screen-sm sm:w-screen backdrop-grayscale-1 bg-zinc-300/20  max-w-screen text-zinc-600 flex items-center justify-center mx-auto py-3 '>
        <div className=''>logo</div>
        <div className=' flex shrink px-5 items-center text-white text-sm '>
            <a href="" className='px-[1vw] py-[.5vh] items-center  justify-center' > Home </a>
            <a href="" className=' px-3 py-2 items-center  ' >About</a>
            <a href="" className=' px-3 py-2 items-center  ' >Login</a>
            <a href="" className='  px-3 py-2 items-center  ' >Contact</a>
        </div>
    </div>
  )
}

export default Navbar