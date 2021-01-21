import React from "react";
import { CardBody, Card } from "reactstrap";

function Header({ name, title }) {
  return (
    <div>
      <Card className="my-2" bg-color="warning">
        <CardBody>
        <h1 className="text-center" > Welcome to Paper Bot</h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;