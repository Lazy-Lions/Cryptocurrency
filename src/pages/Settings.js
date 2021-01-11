import React from 'react'
import { Tab } from 'semantic-ui-react'
import Password from '../components/Password'
import Security from '../components/Security'
import Info from '../components/Info'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />; 
const panes = [
  { menuItem: 'Personal Info', render: () => <Tab.Pane><Info/></Tab.Pane> },
  { menuItem: 'Change Password', render: () => <Tab.Pane><Password/></Tab.Pane> },
  { menuItem: 'Security', render: () => <Tab.Pane><Security/></Tab.Pane> },
]

const Settings = () => (
<>
<Desktop>
<Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
</Desktop>
<Mobile>
<Tab panes={panes} /> 
</Mobile> 
</>
)

export default Settings