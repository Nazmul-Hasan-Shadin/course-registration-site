
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleAddToCart}) => {
    const [courses,setCourses]= useState([]);
    

     
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>  setCourses(data));
    },[])



    return (
        <div className='w-2/3'>
           
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
                courses.map((course)=> <Course
                handleAddToCart={handleAddToCart}
                key={course.id} 
                course={course}></Course>)
             }
        </div>
        </div>
    );
};

export default Courses;