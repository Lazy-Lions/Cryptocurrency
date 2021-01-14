import React, { Component }from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Navigationbar from "./components/Navigationbar";
import AnotherNav from "./components/AnotherNav";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import {About, Affiliate, Terms,Announcement, Privacy, Access, TrustWallet, Crypto, Blockchain, Bitcoin, Exchange} from './pages/FooterElement';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      login:false
    }
  }
  render(){
    return (
      !this.state.login?
        <Router>
        <Navigationbar />
        <Switch>
        <Route path='/bitcoin-basic'  component={Bitcoin} />
        <Route path='/blockchain-basic'  component={Blockchain} />
        <Route path='/crypto-basic'  component={Crypto} />
        <Route path='/trust-wallet'  component={TrustWallet} />
        <Route path='/access'  component={Access} />
        <Route path='/exchange'  component={Exchange} />
        <Route path='/privacy'  component={Privacy} />
        <Route path='/announcement'  component={Announcement} />
        <Route path='/terms'  component={Terms} />
        <Route path='/affiliates'  component={Affiliate} />
        <Route path='/about'  component={About} />
        <Route path='/register' component={Register} />
        <Route path='/'  component={Dashboard} />
        </Switch>
        </Router>
      :
      <Router>
        <AnotherNav />
      <Switch>
      <Route path='/profile' exact component={Profile} />
      <Route path='/settings' exact component={Settings} />
      <Route path='/' exact component={Wallet} />
      </Switch>
      </Router>
    );
  }
  
}