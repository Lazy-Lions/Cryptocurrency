import React, { Component } from 'react'
import "../App.css";
import { Link } from "react-router-dom";
import {Col } from 'react-bootstrap'
import {Segment, Grid, Header, Form, Icon, Input,Button} from 'semantic-ui-react'
import Responsive from 'react-responsive';
import Footer from '../components/Footer';
import FourTopperChart from "../components/FourTopperChart";
import { Parallax} from 'react-parallax';
import BgImage from '../components/img/bitcoin.png'

export default class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      width:window.innerWidth
    }
  }
   updateDimensions = () => {
    this.setState({width:window.innerWidth});
  };
  componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
        return () => window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    console.log(this.state.width)
    const Desktop = props => <Responsive {...props} minWidth={1050} />;
    const Tablet = props => <Responsive {...props}minWidth={701} maxWidth={1049} />;
    const Mobile = props => <Responsive {...props} maxWidth={700} />;

      
      
    const Headline =(props)=>{
      const Style= {
        fontSize: props.Size,
        fontWeight: props.Weight,
        paddingTop: props.PadTop
      }
      return(
        <div style={Style}>Buy & sell Crypto in minutes</div>
      )
    }
    const Promoline =(props)=>{
      const Style= {
        fontSize: props.Size,
        fontWeight: props.Weight,
        paddingBlock: props.PadBlock
      }
      return(
        <div style={Style}>Easiest place to buy, sell, and manage</div>
      )
    }
    const ChartCard =(props)=>{
      return(
        <Grid.Column>
          <Segment className='dashboardCard' style={Style.card}>
            <FourTopperChart name={props.currencyName}/> 
          </Segment>
          </Grid.Column>
      )
    }
    const ContactForm =(props)=>{
      const Style={
        container:{
          backgroundColor: '#00101f',
          paddingBlock:'5rem'

        },
        body:{
          backgroundColor:'#000018',
          marginInline: props.bodyMargin,
          paddingBlock:'2rem',
          color:'whitesmoke',
          textAlign:'center',
          borderRadius:'1rem'  
        },
        nameGroup:{
          marginLeft:props.nameMargin
        },
        fname:{
          width: props.nameWidth,
          paddingBlock: props.namePad
        },
        lname:{
          width:  props.nameWidth,
          paddingBlock: props.namePad,
          marginLeft: props.leftMargin
        },
        fmsg:{
          width: props.msgWidth,
          paddingBlock: props.namePad
        }
        
      }
      return(
        <div style={Style.container}>
          <div >
            <Form style={Style.body}>
            <Header as='h1'inverted >Contact us</Header>
              <Form.Group inline style={Style.nameGroup} stackable>
                <Form.Field >
                  <label><Icon inverted name='user' size='big'/></label>
                  <Input placeholder='First name'size='large' style={Style.fname}transparent/>
                </Form.Field>
                <Form.Field ><Input placeholder='Last name'size='large'  style={Style.lname}transparent/></Form.Field>
              </Form.Group>
              <Form.Field inline >
                  <label><Icon inverted name='envelope' size='big'/></label>
                  <Input placeholder='Message'size='large' style={Style.fmsg} transparent/>
              </Form.Field>
              <Form.Field inline >
                  <label><Icon inverted name='phone' size='big'/></label>
                  <Input placeholder='Phone'size='large' style={Style.fmsg} transparent/>
              </Form.Field>
              <Button style={{paddingInline:'60px',height:'40px'}} >Submit</Button>
            </Form>
          </div> 
        </div>
      )
    }
    const Style={
      cardContainer:{
        backgroundColor: '#00101f',
        color: '#bebebe'
      },
      card:{
        backgroundColor: '#131722',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid #5c5a5a',
        textAlign: 'center',
        color: 'rgb(0, 0, 26)',
        transition: '.5s',
        margin: '1rem 2rem',
      }
    }
    const insideStyles = {
      paddingTop:'3rem',
      color: 'whitesmoke',
    };
    return (
      <div>
      <Parallax bgImage={BgImage} strength={600}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <Col className='text-center'>
          <div >
            <Mobile ><Headline Size='30px' Weight='700' PadTop='4rem'/> </Mobile>
            <Desktop><Headline Size='50px' Weight='1000' PadTop='8rem'/> </Desktop>
            <Mobile><Promoline Size='15px' Weight='400' PadBlock='2rem'/> </Mobile>
            <Desktop><Promoline Size='20px' Weight='500' PadBlock='4rem'/> </Desktop>            
          </div>
          <Form>
            <Form.Field inline stackable >
              <Input placeholder='Email address' size='big'/>
              <Button  size='big'as ={Link} to='/register' style={{paddingBottom:'1.4rem', marginTop:'1rem'}}>Get Started</Button>
            </Form.Field>
          </Form>
          </Col> 
        </div>
      </div>
    </Parallax>
        <div style={Style.cardContainer}>
          <Grid stackable divided columns={4}>
            <ChartCard currencyName='btc'/>
            <ChartCard currencyName='eth'/>
            <ChartCard currencyName='bch'/>
            <ChartCard currencyName='ltc'/>
          </Grid>
        </div>
        <Desktop>
        <ContactForm 
        bodyMargin='20rem'
        namePad='1rem'
        nameWidth='404px'
        msgWidth='820px'
        nameMargin='2.5rem'
        leftMargin='0'
        />
        </Desktop>
        <Tablet>
        <ContactForm 
        bodyMargin='10rem'
        namePad='1rem'
        nameWidth={this.state.width -716} 
        msgWidth= {this.state.width -380} 
        nameMargin='1.5rem'
        leftMargin='0'
        
        />
        </Tablet>
        <Mobile>
        <ContactForm 
        bodyMargin='2rem'
        namePad='.5rem'
        nameWidth={this.state.width -130} 
        msgWidth= {this.state.width -130} 
        nameMargin='1rem'
        leftMargin='45px'
        
        />
        </Mobile>
        
        <Footer/>
      </div>
      
    )
  }
}

