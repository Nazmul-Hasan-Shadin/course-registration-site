import React from 'react';

const Cart = ({selectedCart,credit,creditRemaining}) => {
  
 
    return (
        <div className='md:w-1/3'>
            <div className='p-6 space-y-5  bg-[#FFF]  rounded-xl'>
            <h3 className='text-[#2F80ED]'>Credit Hour Remaining {creditRemaining} hr</h3>
             <hr />

             <h2 className='font-bold '>Course Name</h2>

          <div className='space-y-2 text-[#1C1B1B] font-normal'>
          {
                selectedCart.map((singleCart,indx)=> <p key={indx}>{`${indx +1} . ${singleCart.courseName}`} </p> )
             }
          </div>

             <hr />
            <p className='font-medium'>Total Credit Hour : {credit} </p> 


            </div>
            
        </div>
    );
};

export default Cart;