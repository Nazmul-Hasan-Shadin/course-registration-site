
import { FaBeer, FaDollarSign } from 'react-icons/fa';
const Course = ({course}) => {
    console.log(course);
     const {img,details,courseName,pirce,credit}=course;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center space-y-2">
    <h2 className="card-title font-semibold ">{courseName}</h2>
    <p className='text-[#1c1b1b] font-normal'>{details}</p>
    <div className='flex justify-between gap-3'>
     <p className='flex items-center font-medium gap-2'>    <span> Price:{pirce}  </span>  <FaDollarSign/></p>
        <p className='font-medium'>Credit : {credit} </p>
    </div>
    <div className="card-actions w-[100%] ">
      <button className="btn bg-[#2F80ED]   w-full text-white">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;