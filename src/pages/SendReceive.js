import React,{Component} from 'react'
import {Button, Modal, Nav, Row, Col, Form, Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import Responsive from 'react-responsive';
import * as CgIcons from 'react-icons/cg'

export default class SendReceive extends Component {
    constructor () {
        super();
        this.state = {
          showModal: false,
          showSend: true
        }
      } 
     
      openModal =()=> {
        this.setState({ showModal: true });
      }  
      closeModal =()=> {
        this.setState({ showModal: false });
      }
      openSend =()=> {
        this.setState({ showSend: true});
      }
      openReceive =()=> {
        this.setState({ showSend: false});
      }
    render(){
        const SendReceive =()=>{
            
            return(
                (this.state.showSend)?
                <div className="text-center">
            <Table variant="dark">
            <thead>
                <tr>
                <th>Receiver</th>
                <th><Form.Control type="email" placeholder="Enter email" /></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Note</td>
                <td><Form.Control type="text" placeholder="Message" /></td>
                </tr>
                <tr>
                <td>Amount</td>
                <td><Form.Control type="text" placeholder="Enter Amount" /></td>
                </tr>
                <tr>
                <td>Pay with</td>
                <td><Form.Control as="select"> <option>BTC</option></Form.Control></td>
                </tr>
            </tbody>
            </Table>
            <Button as={Link} to="/register" onClick={this.closeModal}>Continue</Button>
        </div> 
            :
          <div>I am receive</div>
            )
        }   
        const Desktop = props => <Responsive {...props} minWidth={992} />;
        const Mobile = props => <Responsive {...props} maxWidth={991} />; 
      return (
        <>
        <Desktop>
        <Nav.Link onClick={this.openModal}>Send/Receive</Nav.Link>             
        </Desktop>
        
        <Mobile>
        <CgIcons.CgArrowsExchange size={30} onClick={this.openModal}/>
        </Mobile>
        
        <Modal
            show={this.state.showModal}
            onHide={this.closeModal}
        >
            <Nav  variant="tabs">
                <Row className="justify-content-md-center">
                <Col xs={6} className="text-center">
                    <Nav.Link onClick={this.openSend}>Send</Nav.Link>
                </Col>
                <Col xs={6} className="text-center">
                    <Nav.Link onClick={this.openReceive}>Receive</Nav.Link>
                </Col>
                </Row>
            </Nav>
            <Modal.Body>
               <SendReceive/>    
            </Modal.Body>
            
      </Modal>
    </>
    )
  }
}
