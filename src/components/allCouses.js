import React, { useState, useEffect } from 'react';
import Course from './course';

const AllCourses = () => {
    useEffect(()=>{
        document.title =  "PaperBot || NEET"
      }, []);

    const [courses, setCourse ] = useState([
        {title:" NEET Paper", description:"Basic Java Course"},
        {title:"NEET Paper", description:"Basic Python Course"},
        {title:"NEET Paper", description:"Basic Angular Course"},
    ]);

    return(
        <div>
            <h1> All NEET Papers </h1>
            {
              courses.length > 0 ? courses.map((item )=> <Course course={item} />) : "No Courses"
            }
        </div>
    );
};

export default AllCourses;


