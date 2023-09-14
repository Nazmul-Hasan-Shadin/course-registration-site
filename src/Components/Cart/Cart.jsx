import React from 'react';

const Cart = ({cart,credit,creditRemaining}) => {
  
 
    return (
        <div className='w-1/3'>
            <div className='p-6 space-y-5  bg-[#FFF]  rounded-xl'>
            <h3 className='text-[#2F80ED]'>Credit Hour Remaining {creditRemaining} hr</h3>
             <hr />

             <h2 className='font-bold '>Course Name</h2>

          <div className='space-y-2'>
          {
                cart.map((singleCart,indx)=> <p key={indx}>{`${indx +1} . ${singleCart.courseName}`} </p> )
             }
          </div>

             <hr />
            <p className='font-medium'>Total Credit Hour : {credit} </p> 


            </div>
            
        </div>
    );
};

export default Cart;