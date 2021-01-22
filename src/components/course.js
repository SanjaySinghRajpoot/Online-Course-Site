import React, {useEffect} from "react";
import { Link } from "react-router-dom";

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
        <Link to ="/MST1_APR2C2_ETC_B_EI.pdf" target="_blank" download>Download</Link>    
          {/* <Button color="danger" > Download </Button> */}
        </Container>
      </CardBody>
    </Card>
  );
};

export default courses;
