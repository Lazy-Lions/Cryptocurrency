import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Col,Nav,Row,Button,Accordion,Card } from 'react-bootstrap'
import Responsive from 'react-responsive';


export default class Footer extends Component {
   
    render() {
        const Desktop = props => <Responsive {...props} minWidth={992} />;
        const Mobile = props => <Responsive {...props} maxWidth={991} />;
        const About =()=> {
            return(
                <>
                <Nav.Link as={Link} to="/about">About </Nav.Link>
                <Nav.Link as={Link} to="/affiliates">Affiliate</Nav.Link>    
                <Nav.Link as={Link} to="/terms">Terms</Nav.Link>
                <Nav.Link as={Link} to="/announcements">Announcements</Nav.Link>
                <Nav.Link as={Link} to="/privacy">Privacy</Nav.Link>
                </>
            )
        }
        const Product =()=> {
            return(
                <>
                <Nav.Link as={Link} to="/exchange">Exchange</Nav.Link>
                <Nav.Link as={Link} to="/access">Access</Nav.Link>    
                <Nav.Link as={Link} to="/trust_wallet">Trust Wallet</Nav.Link>
                </>
            )
        } 
        const Support =()=> {
            return(
                <>
                <Nav.Link as={Link} to="/feedback">Give Us Feedback</Nav.Link>
                <Nav.Link as={Link} to="/support">Support Center</Nav.Link>
                </>
            )
        }
        const Learn =()=> {
            return(
                <>
                <Nav.Link as={Link} to="/crypto-basic">What is Crypto?</Nav.Link>
                <Nav.Link as={Link} to="/bitcoin-basic">What is Bitcoin</Nav.Link>
                <Nav.Link as={Link} to="/blockchain-basic">What is Blockchain</Nav.Link>
                <Nav.Link as={Link} to="/buy-bitcoin">Buy Bitcoin</Nav.Link>
                <Nav.Link as={Link} to="/buy-ethereum">Buy Ethereum</Nav.Link>
                <Nav.Link as={Link} to="/buy-ripple">Buy Ripple</Nav.Link>
                <Nav.Link as={Link} to="/buy-litecoin">Buy Litecoin</Nav.Link>
                </>
            )
        }
        const Community =()=> {
            return(
                <>
                <Nav.Link as={Link} to="/facebook.com">Facebook</Nav.Link>
                <Nav.Link as={Link} to="/instagram.com">Instagram</Nav.Link>
                <Nav.Link as={Link} to="/twitter.com">Twitter</Nav.Link>
                <Nav.Link as={Link} to="/telegram.com">Telegram</Nav.Link>
                </>
            )
        }
        return (
            <div className='footer'>
                <Mobile>
                    <Col > 
                     <Accordion >
                        <Card className='footer-card'>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="outline-warning" eventKey="0">
                                <h5>About us</h5>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <About/> 
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='footer-card '>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="outline-warning" eventKey="1">
                                <h5>Products</h5>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <Product/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='footer-card '>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="outline-warning" eventKey="2">
                                <h5>Supports</h5>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            <Support/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='footer-card '>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="outline-warning" eventKey="3">
                                <h5>Learn</h5>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <Learn/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='footer-card'>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="outline-warning" eventKey="4">
                                <h5>Community</h5>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                            <Community/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                    
                </Mobile>
                <Desktop>
                <Row>
                    <Col >
                        <h4>About Us</h4>
                        <About/>
                    </Col>
                    <Col>
                        <h4>Products</h4>
                        <Product/>
                    </Col>
                    <Col>
                        <h4>Supports</h4>
                        <Support/>
                    </Col>
                    <Col>
                        <h4>Learn</h4>
                        <Learn/>
                    </Col>
                    <Col>
                        <h4>Community</h4>
                        <Community/>
                    </Col>
                </Row>
                

                </Desktop>
                
                
            </div>
        )
    }
}
