import React from 'react'

function Footer() {
  return (
    <div>
        <div className='p-5 flex justify-between items-center'>
            <h1 className='text-white text-[10vh] font-semibold font-rubik'>MOMOLAND.</h1>
            
            <ul>
                <li className='text-[1.5vw] font-bold tracking-tighter line-clamp-2 mb-2 leading-none'>You Can also <br /> find us on</li>
                <li>Zomato</li>
                <li>Swiggy</li>
            </ul>
            <ul>
                <li className='text-[2vw] font-bold '>Socials</li>
                <li> Instagram </li>
                <li>Twiiter</li>
                <li>Snap</li>
            </ul>
            
            <ul className=''>
                <li className='text-[2vw] font-bold leading-loose'>Contact Us</li>
                <li className='mb-5'>+91 94521-05554 </li>
                <li>XYZ123@gmail.com </li>
            </ul>

        </div>
    </div>
  )
}

export default Footer