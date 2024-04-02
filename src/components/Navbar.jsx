import React  from 'react'

function Navbar() {
  return ( 
    <div className='bg-zinc-500/20 max-w-screen text-zinc-600 flex gap-20 justify-center mx-auto py-3 px-5'>
        <div className=''>logo</div>
        <div className=' flex  gap-20 pl-36 pr-'>
            <a href="" className='border-solid border-orange-400 border-3' >Home</a>
            <a href="">About</a>
            <a href="">Login</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Navbar