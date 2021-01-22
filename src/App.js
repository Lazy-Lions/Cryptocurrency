import React, { useEffect} from 'react';
import "firebase/auth";
import fire from "./components/config/fire";
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Navigationbar from "./components/Navigationbar";
import AnotherNav from "./components/AnotherNav";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Settings from './pages/Settings';
import MyWallet from "./pages/MyWallet";
import Profile from './pages/Profile';
import {TradingMarket, DetailsChart} from './pages/TradingMarket'
import { atom, useSetRecoilState, useRecoilValue} from "recoil";
import {About, Affiliate, Terms,Announcement, Privacy, Access, TrustWallet, Crypto, Blockchain, Bitcoin, Exchange} from './pages/FooterElement';

  export const userState = atom({
    key:'userState',
    default: false
  })
const App =()=>{
  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)
  useEffect(() => {
      fire.auth().onAuthStateChanged((user)=>{
        (user)?setUser(true):setUser(false)
          }  
        )
    }, [user, setUser])
 
    return (
      !user?
        <Router>
        <Navigationbar />
        <Switch>
        <Route
            path="/details/:name"
            render={(props) => <DetailsChart {...props} />}
          />
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
        <Route path="/trading-market" exact component={TradingMarket} />
        <Route path='/'  component={Dashboard} />
        </Switch>
        </Router>
      :
      <Router>
        <AnotherNav />
      <Switch>
      <Route
            path="/details/:name"
            render={(props) => <DetailsChart {...props} />}
          />
      <Route path='/profile' exact component={Profile} />
      <Route path='/settings' exact component={Settings} />
      <Route path="/wallet" exact component={MyWallet} />
      <Route path="/trading" exact component={TradingMarket} />
      <Route path='/'  component={Dashboard} />
      </Switch>
      </Router>
    );
  }
  
export default App