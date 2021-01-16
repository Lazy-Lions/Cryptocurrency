import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Responsive from 'react-responsive';
import { atom, useSetRecoilState } from "recoil";
export const loginState = atom({
  key:'loginState',
  default: false
})
const Login =({modal})=> {  
      const setLogin = useSetRecoilState(loginState)
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

              <Button  inverted color='green' content='Login' onClick={()=>setLogin(true)}/>
              <p style={{textAlign:"center"}}><Link to="/forgot-password">Forgot your password?</Link></p>
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Button as={Link} to='/register' content='Sign up' icon='signup' size='big' onClick={modal}/>
          </Grid.Column>
        </Grid>
        <Desktop>
        <Divider vertical>Or</Divider>
        </Desktop>
        
      </Segment>
      
    )
}
export  default Login