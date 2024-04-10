import React, { useContext, useRef, useState } from 'react'
import UserContext from '../context/UserCoontext';

function Login() {
    const inp1= useRef();
    const inp2= useRef();

   const [username,setusername] = useState('');
   const [password,setpassword] = useState('');
   const {setuser} = useContext(UserContext)
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password);
      setuser({username,password});
       setusername("");
       setpassword("");
   }
  return (
    <div>
       <div className='max-w-screen-sm bg-zinc-300/20 p-4 mx-auto mt-10 justify-center items-center flex flex-col '>
        <h1 className='text-login font-semibold text-[2.5vw] font-pacifico mb-5'>
          Login
          </h1>
         <div className='flex flex-col justify-between bg-gray-600/20 p-5 w-[20vw] h-[40vh] rounded-md '>
          <input type="text" ref={inp2} placeholder='Username' 
          value={username}
          onChange={(e)=>setusername(e.target.value)}
          className='rounded-md bg-zinc-100/30 p-2 focus:outline-none ' />
          <input ref={inp2} type="password" placeholder='Password'
           value={password}
           onChange={(e)=>setpassword(e.target.value)}
          className='rounded-md bg-zinc-100/30 p-2  focus:outline-none' />
           <button onClick={handleSubmit} className='bg-sky-200 rounded-full p-2'>submit</button>
         </div>
       </div>
    </div>
  )
}

export default Login