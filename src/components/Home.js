import React, {useEffect} from 'react';
import {Jumbotron, Component, Button, Container} from "reactstrap" ;

 const Home = () => {

        useEffect(()=>{
          document.title =  "Home || Paper Bot "
        }, []);

     return(
         <div>
            <Jumbotron className="text-center" >
                <h1>Download All Papers </h1>
                <p>
                    It is a simple and Easy. 
                </p>
                <Container>
                    <Button color = "primary "> Start Now </Button>
                </Container>
            </Jumbotron>
         </div>
     );
 }


 export default Home;