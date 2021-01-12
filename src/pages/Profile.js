import React, { Component } from 'react'
import Img from '../components/img/Fardin.jpg'
import { Container, Image,Icon, Grid, Card, Statistic} from 'semantic-ui-react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.fileUpload = React.createRef();
        this.showFileUpload = this.showFileUpload.bind(this);
      }
      showFileUpload() {
        this.fileUpload.current.click();
      }
    render() {
        return (
            
                <Container fluid >
                <Grid.Row>
                <Grid.Column width={3} style={{margin:'2rem'}}>
                    <div className="AddImage">
                       <input
                        type="file"
                        id="my_file"
                        style={{ display: "none" }}
                        ref={this.fileUpload}
                        />
                        <Icon.Group size='huge'>
                        <Image src={Img}  size='medium'/>
                        <Icon corner name='camera' onClick={this.showFileUpload} style={{cursor: 'pointer'}}/>
                        </Icon.Group>
                        
                    </div>
                   
                </Grid.Column>
                <Grid.Column width={13} style={{margin:'2rem'}}>
                <Card.Group>
                <Card fluid color='yellow' header='Fardin Islam' />
                <Card fluid color='yellow' header='CRZ3476534567353' />
                </Card.Group>
                </Grid.Column>
                </Grid.Row>
                <Grid columns={4} stackable divided >
                <Grid.Row columns={4} >
                <Grid.Column >
                    <Card centered color='blue'>
                    <Sparklines data={[5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20]}>
                        <SparklinesBars />
                    </Sparklines>
                    <Statistic label='Total Transaction' value='5,550' />                       
                    </Card>
                </Grid.Column>
                <Grid.Column >
                    <Card centered color='green'>
                    <Sparklines data={[5, 10, 5, 20, 10, 5, 10, 5, 20, 5, 10, 10, 5, 20, 5, 10]}>
                        <SparklinesBars />
                    </Sparklines> 
                    <Statistic label='Send' value='5,550' />  
                    </Card>
                </Grid.Column>
                <Grid.Column >
                    <Card centered color='yellow'>
                    <Sparklines data={[5, 10, 5, 20, 10, 5, 20, 10, 5, 20, 10, 5, 10, 5, 20, 5]}>
                        <SparklinesBars />
                    </Sparklines>  
                    <Statistic label='Received' value='5,550' />     
                    </Card>
                </Grid.Column>
                <Grid.Column >
                    <Card centered color='red'>
                    <Sparklines data={[5, 10, 5, 20, 10, 5, 20, 10, 5, 20, 10, 5, 10, 5, 20, 5]}>
                        <SparklinesBars />
                    </Sparklines>  
                    <Statistic label='Exchanged' value='5,550' />     
                    </Card>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                </Container>
            
        )
    }
}
