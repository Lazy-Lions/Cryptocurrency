import React,{Component} from 'react'
import {Button, Modal, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
export default class SendReceive extends Component {
     constructor () {
        super();
        this.state = {
          showModal: false,
          email:"",
          password:""
        }
      } 
     
      openModal =()=> {
        this.setState({ showModal: true });
      }  
      closeModal =()=> {
        this.setState({ showModal: false });
      }
      validateForm =()=> {
            return this.state.email.length > 0 && this.state.password.length > 0;
          }
        
     handleSubmit =(e)=> {
            e.preventDefault();
          } 
    render(){   
        return (
        <>
        <Button variant="outline-warning" onClick={this.openModal}>Login</Button>
        <Modal
            show={this.state.showModal}
            onHide={this.closeModal}
        >
        <div className="Login">
        <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({
                  [e.target.email]:e.target.value
              }) }
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({
                  [e.target.password]:e.target.value
              }) }
            />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!this.validateForm()}>
            Login
            </Button>
            <p><Link to="/forgot-password">Forgot your password?</Link></p>
            <p>Don't have an account? 
              <Link to="/register" onClick={this.closeModal}>Sign up now</Link>
            </p>
        </Form>
          
        </div>
            
      </Modal>
    </>
    )
  }
}

