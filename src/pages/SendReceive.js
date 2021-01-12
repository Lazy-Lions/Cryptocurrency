import React,{Component} from 'react'
import {Button, Modal, Nav, Row, Col} from "react-bootstrap";
import {Select, Form, Segment,Input,Container, Divider} from 'semantic-ui-react'
import Responsive from 'react-responsive';
import * as CgIcons from 'react-icons/cg'
import QRCode from "react-qr-code";

export default class SendReceive extends Component {
    constructor () {
        super();
        this.state = {
          showModal: false,
          showSend: true
        }
      } 
      componentDidMount(){
        var targetUrl ='http://199.192.16.63/api/send_transaction/BTC'
        fetch(targetUrl,{
            method: 'POST',
            headers: {
                        'Content-Type': "application/json; charset=utf-8",
            },
            body: JSON.stringify({

                "fromAddress":"1EACExky8iZgNWmNGu1HWMJ4YtB4CSoCEP",
                "pkey":"a22f7e1a8c2a2926b6877ef5cbf3c496547ecef8cbbb777f9fc98c430fc4f6b3",
                "toAddress":"15kzPLY35v4pvaVHiiSAPzfm6kyg5gvv9n",
                "amount":0.1,
                "withFee":0
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
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
      const CryptoOptions = [
        { key: '1', text: 'BTC', value: 'BTC' },
        { key: '2', text: 'ETH', value: 'ETH' },
        { key: '3', text: 'BCH', value: 'BCH' },
        { key: '4', text: 'LTC', value: 'LTC' },
      ]   
        const SendReceive =()=>{
            return(
                (this.state.showSend)?
                <Segment inverted className="segment centered">
                  <Form inverted >
                    
                      <Form.Input fluid label='Receiver' placeholder='Crypto Id' />
                      <Form.Input fluid label='Note' placeholder='Message' />
                      <Form.Input fluid label='Amount' placeholder='Enter Amount' />
                      <Form.Field
                        fluid
                        label={{ children: 'Currency'}}
                        control={Select}
                        options={CryptoOptions}
                        placeholder='BTC'
                    />
                    <div className="text-center">
                    <Button type='submit' onClick={this.closeModal} variant='warning'>Continue</Button>
                    </div>
                   
                  </Form>
                  </Segment >
            :
            <Container textAlign='center'>
              <Segment inverted> 
              <QRCode value="CRZ3476534567353"/>
              <Divider horizontal>Or</Divider>
              <Input
                label= 'Crypto Id'
                defaultValue='CRZ3476534567353'
              /> 
              </Segment>
            </Container>
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
        <Nav.Link><CgIcons.CgAddR size={30} onClick={this.openModal}/></Nav.Link> 
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
