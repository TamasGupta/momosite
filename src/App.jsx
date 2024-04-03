import React from 'react'
import Navbar from './components/Navbar'
import Location from './components/location'
import Home from './Home'



function App() {
  return (
    <div style={{
      background:" linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 11%, rgba(252,176,69,1) 100%)"}} className='max-w-screen  ' >
      <Navbar/>
     
      <Home/>

     <div className='w-full h-[100vh] flex justify-center justify-between mx-2 p-5 bg-sky-200/20 items-center flex-shrink overflow-hidden flex-nowrap'>
     <Location/>
    <Location/>
    <Location/>
     </div>
    </div>
  )
}

export default App