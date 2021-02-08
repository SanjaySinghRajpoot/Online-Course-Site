import React, { useState, useEffect } from 'react';
import Course from './course';

const AllCourses = () => {
    useEffect(()=>{
        document.title =  "NEET || Paper Bot"
      }, []);

    const [courses, setCourse ] = useState([
        {title:" NEET Paper", description:"Basic Java Course", link:"/MST1_APR2C2_ETC_B_EI.pdf"},
        {title:"NEET Paper", description:"Basic Python Course"},
        {title:"NEET Paper", description:"Basic Angular Course"},
    ]);

    return(
        <div>
            <h2> All NEET Papers </h2>
            {
              courses.length > 0 ? courses.map((item )=> <Course course={item} />) : "No Courses"
            }
        </div>
    );
};

export default AllCourses;