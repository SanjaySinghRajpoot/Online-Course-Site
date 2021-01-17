import React from  'react';
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home'
import Courses from './components/course';
import AllCourses from './components/allCouses';


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
    </div> 
  ); 
}

export default App;
 