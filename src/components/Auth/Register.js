import React from 'react';
import {Grid,Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';

class Register extends React.Component{

    state = {}
    handleChange=  () => {}

    render(){
        return(
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <icon name="puzzle piece" color="orange" />
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

                             <Button color="orange" fluid size="large">Submit</Button>

                        </Segment> 
                    </Form>
                </Grid.Column>
                 
            </Grid>
        )
    }
}


export default Register;