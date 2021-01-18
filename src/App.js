import React from  'react';
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home'
import Courses from './components/course';
import AllCourses from './components/allCouses';
import AddCourse from './components/addCourse';


function App() {

  const btnHandel = () => {
     toast.success("my message", {
       position: "top-center",
     });
  }

  return (
    <div>
        <ToastContainer />
        <Home />
        <AllCourses />
        <AddCourse />
    </div> 
  ); 
}

export default App;
 