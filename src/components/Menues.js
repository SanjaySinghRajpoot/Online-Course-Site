import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import {Link} from 'react-router-dom';

const Menues = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/add-course" action>Add Corses</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/view-course" action>View Courses</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/contact-us" action>Contact us</Link>
      </ListGroup>
    </div>
  );
};

export default Menues;
