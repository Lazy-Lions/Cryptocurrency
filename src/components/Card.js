import React, {useEffect, useState} from "react";
import firebase from 'firebase';
import "firebase/auth";
import fire from "../components/config/fire";
import { Card, Row } from "react-bootstrap";
import { GrBitcoin } from "react-icons/gr";
import { SiLitecoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { RiBitCoinFill } from "react-icons/ri";
import { useRecoilState} from "recoil";
import { btcprivate, btcpublic, ethprivate, ethpublic, bchprivate, bchpublic, ltcprivate, ltcpublic} from "../pages/Register";
import { Icon, Segment } from "semantic-ui-react";
import axios from "axios";

  const MyCard =(props)=>{
      const [confirmbtc, setConfirmbtc] = useState('')
      const [unconfirmbtc, setUnconfirmbtc] = useState('')
      const [totalbtc, setTotalbtc] = useState('')
      const [confirmeth, setConfirmeth] = useState('')
      const [unconfirmeth, setUnconfirmeth] = useState('')
      const [totaleth, setTotaleth] = useState('')
      const [confirmbch, setConfirmbch] = useState('')
      const [unconfirmbch, setUnconfirmbch] = useState('')
      const [totalbch, setTotalbch] = useState('')
      const [confirmltc, setConfirmltc] = useState('')
      const [unconfirmltc, setUnconfirmltc] = useState('')
      const [totalltc, setTotalltc] = useState('')
      const [btcp, setBtcp] = useRecoilState(btcpublic)
      const [btcpr, setBtcpr] = useRecoilState(btcprivate)
      const [ethp, setEthp] = useRecoilState(ethpublic)
      const [ethpr, setEthpr] = useRecoilState(ethprivate)
      const [bchp, setBchp] = useRecoilState(bchpublic)
      const [bchpr, setBchpr] = useRecoilState(bchprivate)
      const [ltcp, setLtcp] = useRecoilState(ltcpublic)
      const [ltcpr, setLtcpr] = useRecoilState(ltcprivate)
      
      useEffect(() => {
        console.log(ethp)
        console.log(bchp)
          var id=fire.auth().currentUser.uid  
        firebase.database().ref('Currency_Info/'+id).once('value').then((snapshot)=>{
          setBtcp(snapshot.val() && snapshot.val().BtcPublic)
          setBtcpr(snapshot.val() && snapshot.val().BtcPrivate)
          setEthp(snapshot.val() && snapshot.val().EthPublic)
          setEthpr(snapshot.val() && snapshot.val().EthPrivate)
          setBchp(snapshot.val() && snapshot.val().BchPublic)
          setBchpr(snapshot.val() && snapshot.val().BchPrivate)
          setLtcp(snapshot.val() && snapshot.val().LtcPublic)
          setLtcpr(snapshot.val() && snapshot.val().LtcPrivate)
            
        })
        axios.get(`http://199.192.16.63/api/BTC/${btcp}/balance`) 
        .then(res=>{
          setConfirmbtc(res.data.result.balance)
          setUnconfirmbtc(res.data.result.unconfirmedBalance)
          setTotalbtc(res.data.result.total)
        })
        .catch(err=>{console.log(err)})
        axios.get(`http://199.192.16.63/api/ETH/${ethp}/balance`) 
        .then(res=>{
          setConfirmeth(res.data.result.balance)
          setUnconfirmeth(res.data.result.unconfirmedBalance)
          setTotaleth(res.data.result.total)
        })
        .catch(err=>{console.log(err)})
        axios.get(`http://199.192.16.63/api/BCH/${bchp}/balance`) 
        .then(res=>{
          setConfirmbch(res.data.result.balance)
          setUnconfirmbch(res.data.result.unconfirmedBalance)
          setTotalbch(res.data.result.total)
        })
        .catch(err=>{console.log(err)}) 
        axios.get(`http://199.192.16.63/api/LTC/${ltcp}/balance`) 
        .then(res=>{
          setConfirmltc(res.data.result.balance)
          setUnconfirmltc(res.data.result.unconfirmedBalance)
          setTotalltc(res.data.result.total)
        })
        .catch(err=>{console.log(err)})    
      }, [setBtcp, setBtcpr, setEthp, setEthpr, setBchp, setBchpr, setLtcp, setLtcpr, btcp, ethp, bchp, ltcp])

      const backColorbtc = {
        background: "linear-gradient(150deg,rgba(250,0,0,0.5),transparent)",
        backgroundColor: "#FF9319",
      };
      const backColoreth = {
        background: "linear-gradient(150deg,#4a4e6d,transparent)",
        backgroundColor: "#62688F",
      };
      const backColorltc = {
        background: "linear-gradient(150deg,#16335f,transparent)",
        backgroundColor: "#325A98",
      };
      const backColorbch = {
        background: "linear-gradient(150deg,#208136,transparent)",
        backgroundColor: "#30B750",
      };
  
      const bodyColor =
        props.coin === "btc"
          ? backColorbtc
          : props.coin === "eth"
          ? backColoreth
          : props.coin === "ltc"
          ? backColorltc
          : backColorbch;
      const Style={
      card:{
        backgroundColor:'transparent',
        paddingLeft: '1.25%',
        color:'whitesmoke',
        border:'none',
      },
      title:{
        paddingLeft:'2rem',
        fontSize:"20px"
      },
      balance:{
        paddingLeft:'2rem'
      }
    }
    return (
      <Segment style={Style.card ,bodyColor} >
      <Card style={Style.card }className="card_body" >
        <Card.Body style={bodyColor}>
          <Card.Title>
            <Row
              /* style={{ padding: 20, paddingBottom: 5 }} */
              className="row justify-content-between "
            >
              <h4 style={Style.title}>Current Balance</h4>
              {props.coin === "btc" ? (
                <RiBitCoinFill
                  size={60}
                  style={{
                    backgroundColor: "#FF9319",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : props.coin === "eth" ? (
                <FaEthereum
                  size={60}
                  style={{
                    backgroundColor: "#62688F",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : props.coin === "ltc" ? (
                <SiLitecoin
                  size={60}
                  style={{
                    backgroundColor: "#325A98",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              ) : (
                <GrBitcoin
                  size={60}
                  style={{
                    backgroundColor: "#30B750",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
              )}
            </Row>
            <Row style={(Style.balance, bodyColor)}>
              <h1 ><Icon name='dollar'/>
              {props.coin === 'btc'? confirmbtc : props.coin === 'eth'? confirmeth :props.coin === 'bch'? confirmbch :props.coin === 'ltc'?confirmltc: null }
              </h1>
            </Row>
          </Card.Title>
          <Card.Text style={Style.balance}>
            <h4>
            Unconfirmed: {props.coin === 'btc'? unconfirmbtc : props.coin === 'eth'? unconfirmeth :props.coin === 'bch'? unconfirmbch :props.coin === 'ltc'? unconfirmltc : null }</h4>
            <h4>Total:
            {props.coin === 'btc'? totalbtc : props.coin === 'eth'? totaleth :props.coin === 'bch'? totalbch :props.coin === 'ltc'? totalltc : null}</h4>
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Segment>
    );
}
export default MyCard
