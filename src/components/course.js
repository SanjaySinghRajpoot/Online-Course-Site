import React, {useEffect} from "react";

import {
  Card,
  CardBody,
  CardSubtitle,
  Button,
  Container,
  CardText,
} from "reactstrap";

const courses = ({course}) => {

  return (
    <Card>
      <CardBody className= "text-center">
        <CardSubtitle className="font-weight-bold"> {course.title} </CardSubtitle>
        <CardText> {course.description} </CardText>
        <Container  className= "text-center">
          <Button color="danger" > Download </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default courses;
