import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react'
import Img from "./img/Fardin.jpg";

function Profile() {
    const trigger = (
        <span>
          <Image avatar src={Img} /> Fardin islam
        </span>
      )
  return (
    <Dropdown trigger={trigger} pointing='top left' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item text='Account' icon='user' as={Link} to='/accounts'/>
        <Dropdown.Item text='Settings' icon='settings' as={Link} to='/settings'/>
        <Dropdown.Item text='Sign Out' icon='sign out' as={Link} to='/sign-out'/>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default Profile;