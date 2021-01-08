import React, { Component } from 'react'
import "../App.css";
import {Col,Row,Button, Form, FormControl} from 'react-bootstrap'
import Responsive from 'react-responsive';
import Footer from '../components/Footer';
export default class Dashboard extends Component {
  render() {
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Headline =()=>{
      return(
        `Buy & sell Crypto in minutes`
      )
    }
    const Promoline =()=>{
      return(
          `Easiest place to buy, sell, and manage`
      )
    }
    return (
      <div>
        <div className='upper'>
          <Col className='text-center'>
          <div className='upper-text'>
            <Mobile>
            <h3 style={{paddingTop:'4rem'}}><Headline/></h3>
            </Mobile>
            <Tablet>
            <h2 style={{paddingTop:'6rem'}}><Headline/></h2>
            </Tablet>
            <Desktop>
            <h1 style={{paddingTop:'8rem'}}><Headline/></h1>
            </Desktop>
            <Mobile>
            <p style={{paddingBottom:'2rem'}}><Promoline/> </p>
            </Mobile>
            <Tablet>
            <p style={{paddingBottom:'3rem'}}><Promoline/> </p>
            </Tablet>
            <Desktop>
            <p style={{paddingBottom:'4rem'}}><Promoline/> </p>
            </Desktop>           
          </div>
            <Form inline className='form' style={{justifyContent:'center',paddingBottom:'2rem'}}>
            <FormControl  className="mr-sm-2" type="text" placeholder="Email address" name="email" />
            <Button variant="success" type='submit' style={{margin:'1rem'}}>Get Started</Button>
            </Form>
          </Col> 
        </div>
        <div className="card-container" style={{padding:'2rem 2rem'}}>
          <Row xs={1} md={2} lg={4} >
            <Col xs={8} md={5} lg={2} className="card" >
            <h3 >Bitcoin</h3>
            <h4>$2,748.94</h4>
            <h6>+1.28%</h6>
            </Col>
            <Col xs={8} md={5} lg={2} className="card" >
            <h3 >Ethereum</h3>
            <h4>$2,748.94</h4>
            <h6>+1.28%</h6>
            </Col>
            <Col xs={8} md={5} lg={2} className="card" >
            <h3 >Ripple</h3>
            <h4>$2,748.94</h4>
            <h6>+1.28%</h6>
            </Col>
            <Col xs={8} md={5} lg={2} className="card" >
            <h3 >Litecoin</h3>
            <h4>$2,748.94</h4>
            <h6>+1.28%</h6>
            </Col> 
          </Row>
        </div>
        <Footer/>
      </div>
      
    )
  }
}

