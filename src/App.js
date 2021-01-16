import React from  'react';
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home'
import Courses from './components/course';


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
        <Courses Course={{title: "Java", description:"Basic Java Course"}}/>
        <Courses Course={{title: "Python", description:"Basic Python Course"}}/>
    </div> 
  ); 
}

export default App;
 