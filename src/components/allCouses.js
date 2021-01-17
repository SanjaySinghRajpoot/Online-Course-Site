import React, { useState } from 'react';
import Course from './course';

const AllCourses = () => {
    const [courses, setCourse ] = useState([
        {title:"Java Course", description:"Basic Java Course"},
        {title:"Python Course", description:"Basic Python Course"},
        {title:"Angular Course", description:"Basic Angular Course"},
    ]);

    return(
        <div>
            <h1> All Courses </h1>
            {
                courses.length > 0 ? courses.map((item )=> <Course course={item} />) : "No Courses"
            }
        </div>
    );
};

export default AllCourses;


