import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Image} from 'semantic-ui-react'
import Img from "./img/Fardin.jpg";
import { loginState } from '../pages/Login';
import Responsive from 'react-responsive'; 
import { useSetRecoilState } from 'recoil';

const ProfileDrop =()=>{
    const setLogin=useSetRecoilState(loginState)
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Mobile = props => <Responsive {...props} maxWidth={991} />; 
    const trigger = (
        <span>
          <Desktop>
          <Image avatar src={Img} /> Fardin islam
          </Desktop>
          <Mobile>
          <Image avatar src={Img} />
          </Mobile>
          
        </span>
      )
      
    return (
        <Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
                <Dropdown.Item text='Profile' icon='user' as={Link} to='/profile'/>
                <Dropdown.Item text='Settings' icon='settings' as={Link} to='/settings'/>
                <Dropdown.Item text='Sign Out' icon='sign out' onClick={()=>setLogin(false)}/>
            </Dropdown.Menu>   
        </Dropdown>
    );
}
export default ProfileDrop