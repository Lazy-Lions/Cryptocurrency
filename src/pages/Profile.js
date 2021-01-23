import React, { Component } from 'react'
import firebase from 'firebase';
import "firebase/storage";
import '../components/Profile.css'
import fire from "../components/config/fire";
import Img from '../components/img/Avatar.png'
import { Image,Icon,Button} from 'semantic-ui-react'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            Fname:'',
            Lname:'',
            btcp:'',
            ethp:'',
            bchp:'',
            ltcp:'',
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
        let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({url: e.target.result});
    };
    reader.readAsDataURL(e.target.files[0]);
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
          firebase.database().ref('User_Info/'+id).once('value').then((snapshot)=>{
            this.setState({Fname:snapshot.val() && snapshot.val().Firstname})
            this.setState({Lname:snapshot.val() && snapshot.val().Lastname})
          })
          firebase.database().ref('Currency_Info/'+id).once('value').then((snapshot)=>{
            this.setState({btcp:snapshot.val() && snapshot.val().BtcPublic})
            this.setState({ethp:snapshot.val() && snapshot.val().EthPublic})
            this.setState({bchp:snapshot.val() && snapshot.val().BchPublic})
            this.setState({ltcp:snapshot.val() && snapshot.val().LtcPublic})     
          })
    }
    render() {

        return (
                <div  className='fixPad ' >
                    <div className="AddImage d-flex justify-content-center "style={{ margin:'1rem'}} >
                       <input
                        type="file"
                        id="my_file"
                        style={{ display: "none" }}
                        ref={this.fileUpload}
                        onChange={this.handleChange}
                        />
                        <Icon.Group size='huge'>
                        <Image rounded style={{border: '4px solid grey'}} src={this.state.url || Img} alt="Upload image"  height='300' width='300'/>
                        <Icon corner name='camera' onClick={this.showFileUpload} style={{cursor: 'pointer'}}/>
                        </Icon.Group> 
                           
                    </div>
                    <div className="d-flex justify-content-center">
                    <Button onClick={this.handleUpload} color='teal'>Save</Button>
                    </div>
                <div className='profile'>
                <div class="cards-list">
  
<div class="card 1">
  <div class="card_image"> <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt=''/> </div>
  <div class="card_title title-white">
    <h3>Total</h3>
    <p>$1500</p>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" alt=''/>
    </div>
  <div class="card_title title-white">
  <h3>Send</h3>
    <p>$500</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt=''/>
  </div>
  <div class="card_title">
  <h3>Received</h3>
    <p>$500</p>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" alt=''/>
    </div>
  <div class="card_title title-black">
  <h3>Exchange</h3>
    <p>$500</p>
  </div>
  </div>

    </div>
    </div>
                </div>
        )
    }
}
