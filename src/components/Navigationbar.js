import React, { Component } from 'react'
import {Button, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from './RegisterModal';
import Login from "../pages/Login";
export default class Navigationbar extends Component {
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
                    <Login/> 
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register">
                    <Button variant="success" active>Register Now</Button>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
