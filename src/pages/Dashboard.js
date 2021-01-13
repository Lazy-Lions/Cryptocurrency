import React, { Component } from 'react'
import "../App.css";
import {Col ,Button, Form, FormControl} from 'react-bootstrap'
import {Segment, Grid} from 'semantic-ui-react'
import Responsive from 'react-responsive';
import Footer from '../components/Footer';
import FourTopperChart from "../components/FourTopperChart";
export default class Dashboard extends Component {
  render() {
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Mobile = props => <Responsive {...props} maxWidth={991} />;
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
    const Style={
      header:{
        backgroundColor: '#0e1318',
        color: '#bebebe'
      },
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
      },
      form:{
        justifyContent:'center',
        paddingBottom:'2rem'
      }
    }
    return (
      <div className='topPad'>
        <div style={Style.header}>
          <Col className='text-center'>
          <div >
            <Mobile ><Headline Size='30px' Weight='700' PadTop='4rem'/> </Mobile>
            <Desktop><Headline Size='50px' Weight='1000' PadTop='8rem'/> </Desktop>
            <Mobile><Promoline Size='15px' Weight='400' PadBlock='2rem'/> </Mobile>
            <Desktop><Promoline Size='20px' Weight='500' PadBlock='4rem'/> </Desktop>            
          </div>
            <Form inline className='form' style={Style.form}>
            <FormControl  className="mr-sm-2" type="text" placeholder="Email address" name="email" />
            <Button variant="success" type='submit' style={{margin:'1rem'}}>Get Started</Button>
            </Form>
          </Col> 
        </div>
        <div style={Style.cardContainer}>
          <Grid stackable divided columns={4}>
            <ChartCard currencyName='btc'/>
            <ChartCard currencyName='eth'/>
            <ChartCard currencyName='bch'/>
            <ChartCard currencyName='ltc'/>
          </Grid>
        </div>
        <Footer/>
      </div>
      
    )
  }
}

