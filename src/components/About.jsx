import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserCoontext';
function About() {
     const {user}= useContext(UserContext);
  return (
    <div className='max-w-screen-md bg-zinc-300/20 text-[10vw] mx-auto mt-10 p-5'> 
      
      <h1>Hii! This is {user.username}</h1>
       </div>
  )
}

export default About