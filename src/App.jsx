import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'


function App() {


  return (
    <>
     <div className="container mx-auto">

     <h2 className='text-center font-bold text-3xl'>Course Registration</h2>
  <div className='  md:flex gap-5'>
  <Courses></Courses>
    <Cart></Cart>
  </div>

     </div>


    </>
  )
}

export default App
