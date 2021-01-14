import React, { Component } from 'react'
import { Tab ,Image, Header, Icon, Grid ,Step, Container, Segment, Divider} from 'semantic-ui-react'
import { Card, Accordion} from "react-bootstrap";
import Footer from '../components/Footer';

const  Img ="https://react.semantic-ui.com/images/wireframe/short-paragraph.png";
const Style={
    header:{
        marginBlock:'5rem',
    },
    body:{
        marginLeft:'2rem',
        marginBottom:'5rem'
    }
    
}
const HeaderComponent=(props)=>{
    return(
        <Header as='h2' icon textAlign='center' style={Style.header}>
            <Icon name={props.icon} circular />
            <Header.Content>{props.title}</Header.Content>
        </Header>
    )
}
class About extends Component {

    render() {
        
        const panes = [
            { menuItem: 'About', render: () => <Tab.Pane>
                <HeaderComponent icon='users' title='About'/> 
                <Image centered src={Img}/>
                </Tab.Pane> },
            {
              menuItem: 'Mission',render: () => <Tab.Pane>
                  <HeaderComponent icon='rocket' title='Mission'/> 
                  <Image centered src={Img}/>
                  </Tab.Pane>},
            {
              menuItem: 'Careers',render: () => <Tab.Pane>
                  <HeaderComponent icon='handshake' title='Careers'/>
                  <Image centered src={Img}/>
                  </Tab.Pane>}
          ]
        return (
            <div style={{justifyItems:'center'}}>
                <Tab panes={panes} defaultActiveIndex={0} />
                <Footer/>
            </div>
        )
    }
}
class Affiliate extends Component{
    render(){
        
        return(
            <div>
                <HeaderComponent icon='affiliatetheme' title='Become a Cryptocurrency affiliate'/>
                <Grid columns={3} divided stackable style={Style.body}>
                    <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' inverted color='red'>Become an affiliate</Header>
                        <p> After your application is approved, you’ll get access to promotional assets and Impact tracking software.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' inverted color='orange'>Promote Cryptocurrency</Header>
                        <p>Link to Cryptocurrency in articles, create new content, or place ads on your website.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' inverted color='green'>Earn commissions</Header>
                        <p>When new customers join Cryptocurrency through your promotions, you could earn a commission.</p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
    
}
class Terms extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='file alternate' title='Cryptocurrency Terms of Use'/>
                <Image src={Img}  centered />
                <Footer/>
            </div>
        )
    }
}
class Announcement extends Component{
    render(){
        return(
            <div>
               <HeaderComponent icon='announcement' title='Annoucements'/>
               <Grid columns={3} style={Style.body} stackable>
                    <Grid.Row>
                    <Grid.Column>
                    <Header as='h3' inverted color='orange'><Icon  name='bitcoin' />New Crypto Listings</Header>
                    <Image src={Img}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as='h3' inverted color='orange'><Icon name='bell' />Latest News</Header>
                    <Image src={Img}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as='h3' inverted color='orange'><Icon name='braille' />Latest Activities</Header>
                    <Image src={Img}/>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column>
                    <Header as='h3' inverted color='orange'><Icon name='dollar sign' />New Fiat Listings</Header>
                    <Image src={Img}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as='h3' inverted color='orange'><Icon name='plug' />API Updates</Header>
                    <Image src={Img}/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
}
class Privacy extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='expeditedssl' title='Privacy'/>
                <Image src={Img}  centered />
                <Footer/>
            </div>
        )
    }
}
class Exchange extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='exchange' title='Cryptocurrency Exchange'/>
                <Container textAlign='center'>
                <Step.Group ordered >
                    <Step completed>
                    <Step.Content>
                        <Step.Title>Create Wallet</Step.Title>
                        <Step.Description>Choose your wallet options</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step completed>
                    <Step.Content>
                        <Step.Title>Send/Receive</Step.Title>
                        <Step.Description>Choose your exchange options</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step active>
                    <Step.Content>
                        <Step.Title>Continue</Step.Title>
                    </Step.Content>
                    </Step>
                </Step.Group>
                </Container>
                <Footer/>
            </div>
        )
    }
}
class Access extends Component{
  render() {
    const FAQ =(props)=>{
        console.log(props)
        return(
            <Card style={AccordStyle.body}>
                <Accordion.Toggle   eventKey={props.ekey} as='h4'>
                {props.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.ekey}>
                <Card.Body >{props.body}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
    const AccordStyle={
        card:{marginInline:'1rem'},
        body:{paddingBlock:'1rem'}
    }
    return (
    < div style={AccordStyle.card}>
        <HeaderComponent icon='universal access' title='About Cryptocurrency Access'/>
        <Accordion >
        <FAQ ekey='0' title='1) Who can access this program?'
        body='All types of merchants (vendors included) who are interested in the Cryptocurrency cloud model but do not want to build a complete exchange. This is a good fit if you are only interested in Send & Receive Crypto feature.'
        />
        <FAQ ekey='1' title='2) What features are currently available?'
        body='The current version of Cryptocurrency Access only supports the Buy Crypto feature. Direct Sell/Withdrawal/Deposit features will be added In the near future.'
        />
        <FAQ ekey='2' title='3) What crypto assets are supported?'
        body='Users will be able to send and receive BTC, ETH, BCH, LTC.'
        />
        <FAQ ekey='3' title='4) Once linked with a Cryptocurrency account, are token balances going to be displayed within the wallet?'
        body='Only crypto exchanged through the wallet will be displayed.'
        /> 
        </Accordion>
        <Footer/>
    </div>  
    )
  }
}
class TrustWallet extends Component{
    render(){
        const Facility=(props)=>{
            return(
                <Grid.Column>
                
                 <h4><Icon name='check circle' size='large'/>{props.text}</h4> 
                  
                </Grid.Column>
            )
        }
        return(
            <div>
                <HeaderComponent icon='shield alternate' title='The most trusted & secure crypto wallet'/>
                <Grid columns={2} divided style={Style.body} stackable>
                    <Grid.Row >
                    <Facility text='Send and Receive cryptocurrencies within a minutes'/>
                    <Facility text='Easily earn interest on the crypto in your wallet'/>
                    </Grid.Row>
                    <Grid.Row>
                    <Facility text='Track charts and prices within the wallet'/>
                    <Facility text='Keep your crypto safe from hackers & scammers'/>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
}
class Crypto extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='currency' title='What is Cryptocurrency?'/>
                <Segment>
                    <Header as='h3' >Cryptocurrency</Header>
                    <h5>Cryptocurrency is a form of payment that can be exchanged online for goods and services.
                    Many companies have issued their own currencies, often called tokens, and these can be 
                    traded specifically for the good or service that the company provides. Think of them as 
                    you would arcade tokens or casino chips. You’ll need to exchange real currency for the 
                    cryptocurrency to access the good or service.</h5>                   
                    <Divider section />
                    <Header as='h3'>How many cryptocurrencies are there?</Header>
                    <h5>More than 6,700 different cryptocurrencies are traded publicly, according to CoinMarketCap.com, 
                    a market research website. And cryptocurrencies continue to proliferate, raising money through 
                    initial coin offerings, or ICOs. The total value of all cryptocurrencies on Dec. 18, 2020, was 
                    more than $645.7 billion, according to CoinMarketCap, and the total value of all bitcoins, the 
                    most popular digital currency, was pegged at about $421.7 billion.</h5>
                    <Divider section />
                    <Header as='h3'>Are cryptocurrencies a good investment?</Header>
                    <h5>Cryptocurrencies may go up in value, but many investors see them as mere speculations, not real 
                    investments. The reason? Just like real currencies, cryptocurrencies generate no cash flow, so for 
                    you to profit, someone has to pay more for the currency than you did.That’s what’s called “the greater 
                    fool” theory of investment. Contrast that to a well-managed business, which increases its value over 
                    time by growing the profitability and cash flow of the operation.</h5>
                </Segment>
                
                <Footer/>
            </div>
        )
    }
}
class Bitcoin extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='bitcoin' title='What is Bitcoin?'/>
                <Segment>
                    <Header as='h3' >Bitcoin</Header>
                    <h5>Bitcoin is a new currency that was created in 2009 by an unknown person using the alias 
                    Satoshi Nakamoto. Transactions are made with no middle men – meaning, no banks! Bitcoin can 
                    be used to book hotels on Expedia, shop for furniture on Overstock and buy Xbox games. But much 
                    of the hype is about getting rich by trading it. The price of bitcoin skyrocketed into the 
                    thousands in 2017.</h5>
                    <Divider section />
                    <Header as='h3'>Bitcoin wallet</Header>
                    <h5>Bitcoins are stored in a “digital wallet,” which exists either in the cloud or on a user’s 
                    computer. The wallet is a kind of virtual bank account that allows users to send or receive bitcoins, 
                    pay for goods or save their money. Unlike bank accounts, bitcoin wallets are not insured by the FDIC.</h5>             
                    <Divider section />
                    <Header as='h3'>Why bitcoin?</Header>
                    <h5>Bitcoins can be used to buy merchandise anonymously. In addition, international payments 
                    are easy and cheap because bitcoins are not tied to any country or subject to regulation. 
                    Small businesses may like them because there are no credit card fees. Some people just buy 
                    bitcoins as an investment, hoping that they’ll go up in value.</h5>   
                </Segment>
                <Footer/>
            </div>
        )
    }
}
class Blockchain extends Component{
    render(){
        return(
            <div>
                <HeaderComponent icon='chain' title='What is Blockchain?'/>
                <Segment>
                    <Header as='h3' >Blockchain</Header>
                    <h5>First and foremost, blockchain is a public electronic ledger built around a P2P system that can 
                    be openly shared among disparate users to create an unchangeable record of transactions, each time-stamped 
                    and linked to the previous one. Every time a set of transactions is added, that data becomes another block 
                    in the chain (hence, the name).</h5>
                    <Divider section />
                    <Header as='h3'>Public vs Private blockchains</Header>
                    <h5>As a peer-to-peer network, combined with a distributed time-stamping server, public blockchain ledgers 
                    can be managed autonomously to exchange information between parties. There's no need for an administrator. 
                    In effect, the blockchain users are the administrator.A second form of blockchain, known as private or 
                    permissioned blockchain, allows companies to create and centrally administer their own transactional networks 
                    that can be used inter- or intra-company with partners.</h5>             
                    <Divider section />
                    <Header as='h3'>How secure is blockchain?</Header>
                    <h5>While no system is "unhackable," blockchain's simple topology is the most secure today, according to Alex 
                    Tapscott, the CEO and founder of Northwest Passage Ventures, a venture capital firm that invests in blockchain 
                    technology companies. "In order to move anything of value over any kind of blockchain, the network [of nodes] 
                    must first agree that that transaction is valid, which means no single entity can go in and say one way or the 
                    other whether or not a transaction happened," Tapscott said. "To hack it, you wouldn't just have to hack one system 
                    like in a bank..., you'd have to hack every single computer on that network, which is fighting against you doing that.</h5>   
                </Segment>
                <Footer/>
            </div>
        )
    }
}
export  {About, Affiliate, Terms, Announcement, Privacy, Exchange, Access,TrustWallet, Bitcoin, Blockchain, Crypto}