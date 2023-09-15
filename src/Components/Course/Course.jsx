
import { FaBook, FaDollarSign } from 'react-icons/fa';

const Course = ({course,handleAddToCart,toast}) => {
   
     const {img,details,courseName,pirce,credit}=course;

    return (
        <div>
            <div className="card  p-4 lg:p-0   bg-base-100 shadow-xl">
  <figure className=" p-2 ">
    <img  src={img} alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="p-4 items-center text-center space-y-2">
    <h2 className="card-title font-semibold  ">{courseName}</h2>
    <p className='text-[#1c1b1b] font-normal text-justify tracking-tight'>{details}</p>
    <div className='flex justify-between gap-2'>
     <p className='flex items-center font-medium gap-1'>  <FaDollarSign/>    <span> Price:{pirce}  </span> </p>
  <p className='flex items-center font-medium gap-1'>   <FaBook/>   <span className='font-medium'>Credit:{credit}</span></p>
    </div>
    <div className="card-actions w-[100%] ">
      <button onClick={()=>handleAddToCart(course)} className="btn bg-[#2F80ED]   w-full text-white">Select</button>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;