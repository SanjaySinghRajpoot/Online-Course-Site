import { Button } from 'reactstrap';
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Course from './course';


const AddCourse = () => {
  useEffect(()=>{
    document.title =  "Add Course || CodeView"
  }, []);

  const [courses, setCourse ] = useState([
    {title:" JEE Paper", description:"Basic Java Course"},
    {title:"JEE Paper", description:"Basic Python Course"},
    {title:"JEE Paper", description:"Basic Angular Course"},
 ], []);


  return (
    // <Fragment>
    //   <h1 className="text-center my-3">All JEE Papers</h1>
    //   <Form>
    //       <FormGroup>
    //         <Label>Course ID</Label>
    //         <Input
    //           for="userId"
    //           type="text"
    //           placeholder="Enter Details"
    //           name="userId"
    //           id="userId"
    //         />
    //       </FormGroup>
    //     <FormGroup>
    //       <label for="title" >Course Title</label>
    //       <Input
    //         type="text"
    //         placeholder="Enter the title here"
    //         id="CourseTitle"
    //       ></Input>
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="exampleText">Course Description</Label>
    //       <Input
    //         type="textarea"
    //         placeholder="Enter Description"
    //         name="text"
    //         id="desciption"
    //         style={{ height: 150} }
    //       ></Input>
    //     </FormGroup>
    //     <Container className="text-center">
    //       <Button color="success">Add Course</Button>
    //       <Button color="primary ml-3"> Clear </Button>
    //     </Container>   
    //   </Form>
    // </Fragment>

    <div>
    <h1> All JEE Papers </h1>
    {
      courses.length > 0 ? courses.map((item )=> <Course course={item} />) : "No Courses"
    }
    </div>
  );
};

export default AddCourse;
