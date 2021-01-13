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
        const SparkCard =(props)=>{
            return(
                <Grid.Column>
                    <Card centered color='blue'>
                    <Sparklines data={props.sparkData}>
                        <SparklinesBars />
                    </Sparklines>
                    <Statistic label={props.sparkLabel} value= {props.transaction} />                       
                    </Card>
                </Grid.Column>
            )
        }
        return (
                <Container fluid >
                <Grid.Row >
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
                        <Card fluid color='yellow' header='Fardin Islam'/>
                        <Card fluid color='yellow' header='CRZ3476534567353'/>
                    </Card.Group>
                </Grid.Column>
                </Grid.Row>
                <Grid columns={4} stackable divided >
                    <Grid.Row columns={4} >
                        <SparkCard 
                            sparkData={[5, 10, 5, 25, 15, 5, 10, 5, 20, 5, 10, 10, 5, 20, 5, 10]}
                            sparkLabel='Total Transaction'
                            transaction='16,000'
                        />
                        <SparkCard 
                            sparkData={[5, 10, 5, 20, 10, 5, 20, 10, 5, 20, 10, 5, 10, 5, 20, 5]}
                            sparkLabel='Send'
                            transaction='5,500'
                        />
                        <SparkCard 
                            sparkData={[5, 10, 5, 25, 15, 5, 10, 5, 20, 5, 10, 10, 5, 20, 5, 10]}
                            sparkLabel='Received'
                            transaction='4,500'
                        />
                        <SparkCard 
                            sparkData={[5, 10, 5, 20, 10, 5, 20, 10, 5, 20, 10, 5, 10, 5, 20, 5]}
                            sparkLabel='Exchanged'
                            transaction='6,000'
                        />
                    </Grid.Row>
                </Grid>
                </Container>
        )
    }
}
