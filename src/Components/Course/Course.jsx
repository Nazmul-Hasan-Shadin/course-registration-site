
import { FaBeer, FaDollarSign } from 'react-icons/fa';
const Course = ({course,handleAddToCart}) => {
   
     const {img,details,courseName,pirce,credit}=course;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img  src={img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center space-y-2">
    <h2 className="card-title font-semibold ">{courseName}</h2>
    <p className='text-[#1c1b1b] font-normal'>{details}</p>
    <div className='flex justify-between gap-2'>
     <p className='flex items-center font-medium gap-1'>    <span> Price:{pirce}  </span>  <FaDollarSign/></p>
        <span className='font-medium'>Credit:{credit}</span>
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