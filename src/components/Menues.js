import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import {Link} from 'react-router-dom';

const Menues = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/add-course" action>JEE</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/view-course" action>NEET</Link>
        <Link className="list-group-item list-group-item-action" color="primary" tag="a" to="/contact-us" action>Board Papers</Link>
      </ListGroup>
    </div>
  );
};

export default Menues;
