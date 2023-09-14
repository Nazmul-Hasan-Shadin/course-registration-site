import React from 'react';

const Cart = ({cart}) => {
  
 
    return (
        <div className='w-1/3 bg-[#FFF] rounded-xl'>
            <div className='p-6 space-y-4'>
            <h3 className='text-[#2F80ED]'>Credit Hour Remaining  hr</h3>
             <hr />

             <h2 className='font-bold '>Course Name</h2>

             {
                cart.map((singleCart,indx)=> <p key={indx}>  {singleCart.courseName} </p> )
             }
            </div>
            
        </div>
    );
};

export default Cart;