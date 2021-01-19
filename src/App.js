import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Courses from "./components/course";
import AllCourses from "./components/allCouses";
import AddCourse from "./components/addCourse";
import Header from "./components/Header";
import Menues from "./components/Menues";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const btnHandel = () => {
    toast.success("my message", {
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <h2>Menu</h2>
              <Menues />
            </Col>
            <Col md={8} className="text-center">
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-course" component={AllCourses} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
