import React, { Component } from 'react'
import {Button, Nav, Navbar, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from './RegisterModal';
import Login from "../pages/Login";
export default class Navigationbar extends Component {
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
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand as={Link} to="/">Cryptocurrency</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <RegisterModal/>
                    <Nav.Link as={Link} to="/trading-market">Trading Market</Nav.Link>   
                    </Nav>
                    <Nav >
                    <Nav.Link >
                    <Button variant="outline-warning" onClick={this.openModal}>Login</Button>
                    <Modal
                        show={this.state.showModal}
                        onHide={this.closeModal}
                    >
                    <Login/>
                    </Modal>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register">
                    <Button variant="danger" active>Register Now</Button>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
