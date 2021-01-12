import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { Dropdown, Image} from 'semantic-ui-react'
import Img from "./img/Fardin.jpg";
import Login from '../pages/Login';
import Responsive from 'react-responsive'; 

export default class ProfileDrop extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false,
          email:"",
          password:""
        }
      } 
     
      openModal =()=> {
        this.setState({ showModal: true });
      }  
      closeModal =()=> {
        this.setState({ showModal: false });
      }
    render() {
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
                <Dropdown.Item text='Sign Out' icon='sign out' onClick={this.openModal}/>
                <Modal
                    show={this.state.showModal}
                     onHide={this.closeModal}
                >
                <Login/>
                </Modal>
            </Dropdown.Menu>   
        </Dropdown>
    );
    }
}