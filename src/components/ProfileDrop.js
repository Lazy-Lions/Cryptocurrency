import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Image} from 'semantic-ui-react'
import Img from "./img/Avatar.png";
import Responsive from 'react-responsive'; 
import fire from "../components/config/fire";
import "firebase/auth";
import firebase from 'firebase';
import { useRecoilState } from 'recoil';
import { firstnameState } from '../pages/Register';

const ProfileDrop =()=>{
    const [fname, setFname] = useRecoilState(firstnameState)
    const [image, setImage] = useState('')
    useEffect(() => {
      var id=fire.auth().currentUser.uid  
    firebase.database().ref('User_Info/'+id).once('value').then((snapshot)=>{
      setFname(snapshot.val() && snapshot.val().Firstname)
    })
    firebase.database().ref(`User_Images/${id}/images`).once('value').then((snapshot)=>{   
      setImage(snapshot.val() && snapshot.val().Image)
    })
  }, [setFname, setImage])
    const logout=()=>{
        fire.auth().signOut()
    }
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Mobile = props => <Responsive {...props} maxWidth={991} />; 
    const trigger = (
        <span>
          <Desktop>
          <Image avatar src={image || Img} /> {fname}
          </Desktop>
          <Mobile>
          <Image avatar src={image || Img}  />
          </Mobile>
          
        </span>
      )
      
    return (
        <Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
                <Dropdown.Item text='Profile' icon='user' as={Link} to='/profile'/>
                <Dropdown.Item text='Settings' icon='settings' as={Link} to='/settings'/>
                <Dropdown.Item text='Sign Out' icon='sign out' onClick={logout}/>
            </Dropdown.Menu>   
        </Dropdown>
    );
}
export default ProfileDrop