import { useState } from 'react'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'


function App() {
 const [cart,setCart]= useState([]);
 
 const handleAddToCart=(course)=>{
  const newCart = [...cart ,course];
   setCart(newCart)

 } 


  return (
    <main className='bg-[#F3F3F3]'>
     <div className="container mx-auto ">

     <h2 className='text-center font-bold text-3xl'>Course Registration</h2>
  <div className='  md:flex gap-5'>
  <Courses handleAddToCart={handleAddToCart}></Courses>
    <Cart cart={cart}></Cart>
  </div>

     </div>


    </main>
  )
}

export default App
