import { useState } from 'react'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'


function App() {
 const [cart,setCart]= useState([]);
 const [creditRemaining,setCreditRemaining]=useState(20);
 const [credit ,setCredit]= useState(0);

 
 const handleAddToCart=(course)=>{
  const newCart = [...cart ,course];
   const existCart= cart.find((item=> item.id ==course.id))
    if (existCart) {
      return alert('Same Course cannot added again')
    }
    
    const creditToNum= parseFloat(course.credit);
    const totalCredit=  creditToNum + credit;
    if (totalCredit>20) {
       return alert('Maximum Credit reached')
    }

    setCredit(totalCredit);
    const remainingCredit= creditRemaining - creditToNum;
    if (remainingCredit<0) {
         return alert('Your credit has finished')
    }
    console.log(remainingCredit);

    setCreditRemaining(remainingCredit)


   setCart(newCart)

 } 


  return (
    <main className='bg-[#F3F3F3]'>
     <div className="container mx-auto ">

     <h2 className='text-center font-bold text-3xl py-4'>Course Registration</h2>
  <div className='  md:flex gap-5'>
  <Courses handleAddToCart={handleAddToCart}></Courses>
    <Cart cart={cart} credit={credit} creditRemaining={creditRemaining}></Cart>
  </div>

     </div>


    </main>
  )
}

export default App
