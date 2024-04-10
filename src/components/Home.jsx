import React from 'react'
import Location from './location'
import { useParams } from 'react-router-dom'
function Home() {
  
  return (
    
    <div>
        <div className='mx-5 p-5 mb-10 relative'>
            <h1 className='text-white font-semibold text-[10vw] font-pacifico'>
                MOMOLAND 
            </h1>
            <div className='flex items-center gap-2'>
            <h2 className='text-amber-300 text-[15vw] font-semibold leading-none tracking-tight '>
                GRAB
            </h2>
           <div >
           <h2 className='text-[6vw] font-semibold leading-none'> YOUR FAV</h2>
            <h2 className='text-[5vw] font-bold leading-none'>NOW</h2>
           </div>
       
            </div>
           
        </div>

        <img src="https://png.pngtree.com/png-vector/20240107/ourmid/pngtree-chinese-dumplings-png-image_11427718.png" alt="" className='absolute bottom-10 right-0' />
        <div className='w-full h-[100vh] flex justify-center justify-between mx-2 p-5 bg-sky-200/20 items-center flex-shrink overflow-hidden flex-nowrap'>
     <Location/>
    <Location/>
    <Location/>
     </div>
    </div>
  )
}

export default Home