import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
  Container,
  CardText,
} from "reactstrap";

const Courses = ({Course}) => {
  return (
    <Card>
      <CardBody className= "text-center">
        <CardSubtitle className="font-weight-bold"> {Course.title} </CardSubtitle>
        <CardText> {Course.description} </CardText>
        <Container className= "text-center">
          <Button color="danger"> Delete </Button>
          <Button color="warning ml-3"> Update </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Courses;
