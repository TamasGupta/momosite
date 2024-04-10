import React from 'react'
import Navbar from './components/Navbar'


import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'



function App() {
  return ( 
    <UserContextProvider>
    <div style={{
      background:" linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 11%, rgba(252,176,69,1) 100%)"}} className='max-w-screen overflow-auto   ' >
      <Navbar/>
      <Outlet/>
      

     
     <Footer/>
    </div>
    </UserContextProvider>
  )
}

export default App