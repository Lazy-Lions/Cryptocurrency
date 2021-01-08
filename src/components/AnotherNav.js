import React, { Component } from 'react'
import Responsive from 'react-responsive';
import {Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import Notification from './Notification';
import SendReceive from "../pages/SendReceive";
export default class AnotherNav extends Component {
      render() {
        const Desktop = props => <Responsive {...props} minWidth={992} />;
        const Mobile = props => <Responsive {...props} maxWidth={991} />;
        return (
          <>
          <Desktop>
            <Navbar bg="danger" variant="dark">
              <Navbar.Brand as={Link} to="/">Cryptocurrency</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/trading-market">Trading Market</Nav.Link>
                <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link> 
                <SendReceive/>
              </Nav>
              <Nav >
                <Nav.Link ><Notification/></Nav.Link>
                <Nav.Link as={Link} to="/profile-setting"><FaIcons.FaUserCog size={30}/></Nav.Link>
                <Nav.Link as={Link} to="/user"><FaIcons.FaUserCircle size={30}/> User</Nav.Link>
              </Nav>
            </Navbar>
          </Desktop>
          <Mobile>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Cryptocurrency</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link ><Notification/></Nav.Link>             
              </Nav>
            </Navbar>
            <Navbar fixed="bottom" bg="primary" variant="dark">
              <Nav className="mx-auto parent " >
                <Nav.Link as={Link} to="/profile-setting" ><FaIcons.FaUserCog size={30}/></Nav.Link>
                <Nav.Link as={Link} to="/wallet" ><FaIcons.FaWallet size={30}/></Nav.Link>
                <SendReceive/>
                <Nav.Link as={Link} to="/trading" ><FaIcons.FaChartBar size={30}/></Nav.Link>
                <Nav.Link as={Link} to="/user" ><FaIcons.FaUserCircle size={30}/></Nav.Link>
              </Nav>
            </Navbar>
          </Mobile>
        </>
        );
      }
}