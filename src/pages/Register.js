import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
export default class Register extends Component {
    render() {
        return (
            <div className='register ' >
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
        )
    }
}
