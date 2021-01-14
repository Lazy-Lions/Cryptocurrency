import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Header, Icon } from "semantic-ui-react";
import bg from "../components/img/crypto.png";
import Responsive from 'react-responsive';

export default class Register extends Component {
    render() {
        const RegisterForm=(props)=>{
            const Style={
                container:{
                    paddingInline:props.padInline,
                    paddingBlock:props.padBlock,
                    alignContent: 'center',
                    backgroundImage:`url(${bg})`,
                    color:'olive',
                    
                },
                header:{
                    paddingBlock:'2rem'
                },
                element:{
                    backgroundColor:'whitesmoke',
                    paddingInline:props.elementPad,
                    paddingBottom:'2rem',
                    borderRadius:'1rem',
                    boxShadow:'0 0 18px  #f5f5f5'
                }
                
            }
            return(
                <div style={Style.container}>
                <div style={Style.element}>
                <Header as='h2' icon textAlign='center' color='olive' style={Style.header}>
                    <Icon name='add user' color='olive' inverted/>
                    <Header.Content>Create Account</Header.Content>
                </Header>
                <Form >
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree to the all terms and conditions" />
                    </Form.Group>
                    <div className="text-center">
                    <Button variant="danger" type="submit" style={{paddingInline:'2rem'}}> Submit </Button> 
                    </div>
                    </Form>
                </div>        
            </div>
            )
        }
        const Desktop = props => <Responsive {...props} minWidth={992} />;
        const Mobile = props => <Responsive {...props} maxWidth={991} />; 
        return (
            <>
                <Desktop><RegisterForm padInline='15rem' padBlock='5rem' elementPad='3rem'/></Desktop>
                <Mobile><RegisterForm padInline='3rem' padBlock='2rem' elementPad='1rem'/></Mobile>
            </>            
        )
    }
}
