import React from 'react'
import { Tab, Button, Form, Segment, Divider, Image} from 'semantic-ui-react'
import Info from '../components/Info'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />; 
const panes = [
  { menuItem: 'Personal Info', render: () => <Tab.Pane><Info/></Tab.Pane> },
  { menuItem: 'Change Password', render: () => <Tab.Pane><Password/></Tab.Pane> },
  { menuItem: 'Security', render: () => <Tab.Pane><Security/></Tab.Pane> },
]
const Password = () => (
  <Segment style={{backgroundColor:'#f0f4c3'}} basic textAlign={"center"}>
    <Form >
      <Form.Group widths='equal'>
        <Form.Input fluid label='Old Password' placeholder='Old Password' />
        <Form.Input fluid label='New Password' placeholder='New Password' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
const Security = () => (
  <Segment style={{backgroundColor:'#f0f4c3'}}>
    <Divider horizontal >
    <h1>2-Step Verification</h1> 
    </Divider>
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    <Divider inverted />

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    
  </Segment>
)
const Settings = () => (
  <div className="fixPad">
    <Desktop>
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    </Desktop>
    <Mobile >
    <Tab panes={panes} /> 
    </Mobile> 
  </div>
)

export default Settings