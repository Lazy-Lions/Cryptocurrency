import React from 'react';
import Navigationbar from "./components/Navigationbar";
 import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
/* import Wallet from './pages/Wallet';
import Trade from "./pages/Trade";
import BuySell from './pages/BuySell';
import AffliateSystem from './pages/AffliateSyatem'
import Charts from './pages/Charts'
import Wizards from './pages/Wizards'
import Form from './pages/Form'
import Settings from "./pages/Settings";  */

function App() {
  return (
    <>
      <Router>
      <Navigationbar />
      <Route path='/' exact component={Dashboard} />
      <Route path='/register' exact component={Register} />
        {/* <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/wallet' component={Wallet} />
          <Route path='/trade' component={Trade} />
          <Route path='/buy&sell' component={BuySell} />
          <Route path='/affliate_system' component={AffliateSystem} />
          <Route path='/charts' component={Charts} />
          <Route path='/wizards' component={Wizards} />
          <Route path='/form' component={Form} />
          <Route path='/settings' component={Settings} />
        </Switch> */}
        </Router>
      </>
  );
}

export default App;
