import { useState } from 'react'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const [cart,setCart]= useState([]);
 const [creditRemaining,setCreditRemaining]=useState(20);
 const [credit ,setCredit]= useState(0);

 
 const handleAddToCart=(course)=>{
  const newCart = [...cart ,course];
   const existCart= cart.find((item=> item.id ==course.id))
    if (existCart) {
      return toast('Same Course cannot added again')
    }
    
    const creditToNum= parseFloat(course.credit);
    const totalCredit=  creditToNum + credit;
    if (totalCredit>20) {
       return toast('Maximum Credit reached')
    }

    setCredit(totalCredit);
    const remainingCredit= creditRemaining - creditToNum;
    if (remainingCredit<0) {
         return toast('Your credit has finished')
    }
    console.log(remainingCredit);

    setCreditRemaining(remainingCredit)


   setCart(newCart)

 } 


  return (
    <main className='bg-[#F3F3F3]'>
     <div className="container mx-auto ">

     <h2 className='text-center font-bold text-3xl py-6'>Course Registration</h2>
  <div className='  flex flex-col-reverse md:flex-row gap-5'>
  <Courses handleAddToCart={handleAddToCart} toast={toast} ></Courses>
    <Cart cart={cart} credit={credit} creditRemaining={creditRemaining}></Cart>
  </div>

     </div>

     <ToastContainer></ToastContainer>
    </main>
  )
}

export default App
