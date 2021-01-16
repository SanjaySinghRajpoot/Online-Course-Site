import React from 'react';
import {Jumbotron, Component, Button, Container} from "reactstrap" ;

 const Home = () => {
     return(
         <div>
            <Jumbotron className="text-center" >
                <h1>Learn Code With Me </h1>
                <p>
                    It is a learning project. 
                </p>
                <Container>
                    <Button color = "primary "> Start Now </Button>
                </Container>
            </Jumbotron>
         </div>
     );
 }


 export default Home;