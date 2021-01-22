import React, { Component } from 'react'
import firebase from 'firebase';
import "firebase/storage";
import fire from "../components/config/fire";
import Img from '../components/img/Avatar.png'
import { Container, Image,Icon, Grid, Card, Statistic, Button} from 'semantic-ui-react'
import { ProgressBar } from "react-bootstrap";
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            url:'',
            Progress:0,
        }
        this.fileUpload = React.createRef();
      }
      showFileUpload=()=> {
        this.fileUpload.current.click();
      }
      handleChange=(e)=>{
        this.setState({image:e.target.files[0]})
    }
      handleUpload=()=>{
        const {image}=this.state
        var id=fire.auth().currentUser.uid 
        firebase.storage().ref(`User_Images/${id}/${image.name}`).put(image)
        .on('state_changed', 
        (snapshot)=>{
            const Progress= Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            this.setState({Progress})
        },
        (error)=>{
            console.log(error)
        },
        ()=>{
            firebase.storage().ref(`User_Images/${id}`).child(image.name).getDownloadURL().then(url=>{
                console.log(url)
                this.setState({url})
                firebase.database().ref(`User_Images/${id}/images`).set({
                    Image: this.state.url
                })
            })
        })   
    }
    componentDidMount (){
        var id=fire.auth().currentUser.uid  
          firebase.database().ref(`User_Images/${id}/images`).once('value').then((snapshot)=>{
            this.setState({url:snapshot.val() && snapshot.val().Image})
          })
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
                <Container fluid className='fixPad'>
                <Grid.Row >
                <Grid.Column width={3} style={{margin:'2rem'}}>
                    <div className="AddImage">
                       <input
                        type="file"
                        id="my_file"
                        style={{ display: "none" }}
                        ref={this.fileUpload}
                        onChange={this.handleChange}
                        />
                        <Icon.Group size='huge'>
                        <Image src={this.state.url || Img} alt="Upload image"  size='medium'/>
                        <Icon corner name='camera' onClick={this.showFileUpload} style={{cursor: 'pointer'}}/>
                        </Icon.Group>    
                    </div>
                    <ProgressBar animated now={this.state.Progress}  />
                    <Button onClick={this.handleUpload}>Upload</Button>
                </Grid.Column>
                <Grid.Column width={13} style={{margin:'2rem'}}>
                    <Card.Group>
                        <Card fluid color='yellow' header='Fardin Islam'/>
                        <Card fluid color='yellow' header='CRZ3476534567353'/>
                    </Card.Group>
                </Grid.Column>
                </Grid.Row>
                <Grid columns={4} stackable divided  >
                    <Grid.Row columns={4} >
                        <SparkCard 
                            sparkData={[5, 10, 5, 25, 15, 5, 10, 5, 20, 5, 10, 10, 5, 20, 5, 10]}
                            sparkLabel='Total Transaction'
                            transaction='16,00'
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
