import React, { useState } from 'react'
import firebase from 'firebase';
import fire from "../components/config/fire";
import "firebase/auth";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Responsive from 'react-responsive';
import { useSetRecoilState, useRecoilValue} from "recoil";
import { emailState, passwordState } from './Register';


const ForgotPassword=()=>{
  const [email, setEmail]=useState('')
  const submitHandler=()=>{
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        alert('Email has been sent')
    })
    .catch((err)=>{
        console.log(err)
        alert('Enter valid email address')
    })
}
    return (
        <div>
            <Form>
              <h3>Reset Password</h3>
              <Form.Input
                icon='mail'
                iconPosition='left'
                label='Email'
                placeholder='Email'
                type='email'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Button  inverted color='green' content='Continue' onClick={submitHandler}/>
            </Form> 
        </div>
    )
}
const Login =({modaal})=> { 
      const setEmail = useSetRecoilState(emailState)
      const setPassword = useSetRecoilState(passwordState)
      const email = useRecoilValue(emailState) 
      const password = useRecoilValue(passwordState)
      const login=(event)=>{
          event.preventDefault();
          fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
              console.log("Succesful")
          }).catch((err)=>{
              console.log("Error")
          })
      }
      
      const Desktop = props => <Responsive {...props} minWidth={992} />; 
        return (
        <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon='mail'
                iconPosition='left'
                label='Email'
                placeholder='Email'
                type='email'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
              />

              <Button  inverted color='green' content='Login' onClick={login}/>
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Button as={Link} to='/register' content='Sign up' icon='signup' size='big' onClick={modaal}/>
          </Grid.Column>
        </Grid>
        <Desktop>
        <Divider vertical>Or</Divider>
        </Desktop>
        
      </Segment>
      
    )
}
export  {Login,ForgotPassword}