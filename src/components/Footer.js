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
        const AccordionCard =(props)=>{
            return(
                <Card style={Style.card}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="outline-warning" eventKey={props.ekey}>
                                    <h5>{props.title}</h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={props.ekey}>
                                <Card.Body>
                                    {props.content}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
            )
        }
        const Style ={
            footer:{
                backgroundColor: '#000014',
                color: 'whitesmoke',
                paddingBlock: '3rem',
                paddingInline: '1rem'
            },
            card:{
                borderRadius: '.5rem',
                backgroundColor: '#5cb85c'
            },
            h4:{
                paddingLeft: '1rem',
            }
        }
        return (
            <div style={Style.footer}>
                <Mobile>
                    <Col className='text-center'> 
                     <Accordion >
                        <AccordionCard ekey='0' title='About Us' content={<About/>}/>
                        <AccordionCard ekey='1' title='Products' content={<Product/>}/>
                        <AccordionCard ekey='2' title='Supports' content={<Support/>}/>
                        <AccordionCard ekey='3' title='Learn' content={<Learn/>}/>
                        <AccordionCard ekey='4' title='Community' content={<Community/>}/> 
                        </Accordion>
                    </Col>    
                </Mobile>
                <Desktop>
                <Row>
                    <Col><h4 style={Style.h4}>About Us</h4><About/></Col>
                    <Col><h4 style={Style.h4}>Products</h4><Product/></Col>
                    <Col><h4 style={Style.h4}>Supports</h4><Support/></Col>
                    <Col><h4 style={Style.h4}>Learn</h4><Learn/></Col>
                    <Col><h4 style={Style.h4}>Community</h4><Community/></Col>
                </Row>
                </Desktop>    
            </div>
        )
    }
}
