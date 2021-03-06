import React from 'react';
import {Grid,Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



class Register extends React.Component{

    state = {
        username: "",
        email:"",
        password:"",
        passwordConfirmation: ""
    }

    handleChange =  event  => {
        this.setState({ [event.target.name]: event.target.value});

    };
    
    render(){
        const {username, email, password, passwordConfirmation} = this.state;
    
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <icon name="text" color="orange" />
                               Register For NutChat 
                    </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid="username" icon="user" iconPosition="left"
                             placeholder="Username" onChange = {this.handleChange} type="text"/>

                              <Form.Input fluid="email" icon="mail" iconPosition="left"
                             placeholder="Email Address" onChange = {this.handleChange} type="text"/>

                              <Form.Input fluid="password" icon="lock" iconPosition="left"
                             placeholder="Password" onChange = {this.handleChange} type="text"/>

                             <Form.Input fluid="passwordConfirmation" icon="repeat" iconPosition="left"
                             placeholder="Password Confirmation" onChange = {this.handleChange} type="text"/>

                             <Button color="orange" fluid size="large"> Submit </Button>
                        </Segment> 
                    </Form>
                    <Message> Already a User ? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

 
export default Register;