import { Button } from 'reactstrap';
import React, { Fragment } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const AddCourse = () => {
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill course Details</h1>
      <Form>
          <FormGroup>
            <Label>Course ID</Label>
            <Input
              for="userId"
              type="text"
              placeholder="Enter Details"
              name="userId"
              id="userId"
            />
          </FormGroup>
        <FormGroup>
          <label for="title" >Course Title</label>
          <Input
            type="text"
            placeholder="Enter the title here"
            id="CourseTitle"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Course Description</Label>
          <Input
            type="textarea"
            placeholder="Enter Description"
            name="text"
            id="desciption"
            style={{ height: 150} }
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="primary ml-3"> Clear </Button>
        </Container>   
      </Form>
    </Fragment>
  );
};

export default AddCourse;
