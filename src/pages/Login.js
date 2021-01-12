import React,{Component} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Responsive from 'react-responsive';

export default class Login extends Component {
     
      validateForm =()=> {
            return this.state.email.length > 0 && this.state.password.length > 0;
          }
        
     handleSubmit =(e)=> {
            e.preventDefault();
          } 
    render(){  
      const Desktop = props => <Responsive {...props} minWidth={992} />; 
        return (
        <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
              />

              <Button  inverted color='green' content='Login' />
              <p style={{textAlign:"center"}}><Link to="/forgot-password">Forgot your password?</Link></p>
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Button as={Link} to='/register' content='Sign up' icon='signup' size='big' onClick={this.closeModal}/>
          </Grid.Column>
        </Grid>
        <Desktop>
        <Divider vertical>Or</Divider>
        </Desktop>
        
      </Segment>
      
    )
  }
}
