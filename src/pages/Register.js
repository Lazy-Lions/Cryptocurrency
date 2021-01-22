import React, {useState,useEffect} from 'react'
import firebase from 'firebase';
import fire from "../components/config/fire";
import "firebase/auth";
import { Header, Icon, Form, Button,Checkbox } from "semantic-ui-react";
import bg from "../components/img/crypto.png";
import { atom, useRecoilState} from "recoil";
import axios from "axios";

     export const firstnameState = atom({
      key:'firstname',
      default: ''
    })
    export const lastnameState = atom({
        key:'lastname',
        default: ''
    })
    export const emailState = atom({
        key:'email',
        default: ''
    })
    export const passwordState = atom({
        key:'password',
        default: ''
    })
    export const btcpublic = atom({
        key:'btcpublic',
        default: ''
      })
      export const btcprivate = atom({
          key:'btcprivate',
          default: ''
      })
      export const ethpublic = atom({
          key:'ethpublic',
          default: ''
      })
      export const ethprivate = atom({
          key:'ethprivate',
          default: ''
      })
      export const bchpublic = atom({
        key:'bchpublic',
        default: ''
    })
    export const bchprivate = atom({
        key:'bchprivate',
        default: ''
    })
    export const ltcpublic = atom({
        key:'ltcpublic',
        default: ''
    })
    export const ltcprivate = atom({
        key:'ltcprivate',
        default: ''
    })
  
const Register =()=> {
        const [btcp, setBtcpublic] = useRecoilState(btcpublic)
        const [btcpr, setBtcprivate] = useRecoilState(btcprivate)
        const [ethp, setEthpublic] = useRecoilState(ethpublic)
        const [ethpr, setEthprivate] = useRecoilState(ethprivate)
        const [bchp, setBchpublic] = useRecoilState(bchpublic)
        const [bchpr, setBchprivate] = useRecoilState(bchprivate)
        const [ltcp, setLtcpublic] = useRecoilState(ltcpublic)
        const [ltcpr, setLtcprivate] = useRecoilState(ltcprivate)
        const [fname, setFname] = useRecoilState(firstnameState)
        const [lname, setLname] = useRecoilState(lastnameState)
        const [email, setEmail] = useRecoilState(emailState)
        const [password, setPassword] = useRecoilState(passwordState)
        const [width, setWidth] = useState(window.innerWidth);
        const updateDimensions = () => {
        setWidth(window.innerWidth);
        };
        useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
        }, []);
        const Style={
            container:{
                
                paddingInline:width>990? '10rem':'3rem',
                paddingBlock:width>990? '5rem':'2rem',
                alignContent: 'center',
                backgroundImage:`url(${bg})`,
                color:'olive',
                
            },
            header:{
                paddingBlock:'2rem'
            },
            element:{
                backgroundColor:'whitesmoke',
                paddingInline:width>990? '5rem':'2rem',
                paddingBottom:'2rem',
                borderRadius:'1rem',
                boxShadow:'0 0 18px  #f5f5f5'
            }
            
        }
        useEffect(() => {
            axios.post('http://199.192.16.63/api/create_wallet', { 'currency': 'BTC' })
            .then(res => {setBtcpublic(res.data.result.public) ;setBtcprivate(res.data.result.private)})
            .catch(err=>console.log(err))
            axios.post('http://199.192.16.63/api/create_wallet', { 'currency': 'ETH' })
            .then(res => {setEthpublic(res.data.result.public) ;setEthprivate(res.data.result.private)})
            .catch(err=>console.log(err))
            axios.post('http://199.192.16.63/api/create_wallet', { 'currency': 'BCH' })
            .then(res => {setBchpublic(res.data.result.public) ;setBchprivate(res.data.result.private)})
            .catch(err=>console.log(err))
            axios.post('http://199.192.16.63/api/create_wallet', { 'currency': 'LTC' })
            .then(res => { setLtcpublic(res.data.result.public) ;setLtcprivate(res.data.result.private)})    
            .catch(err=>console.log(err))
            
        }, [setBtcpublic, setBtcprivate, setEthpublic, setEthprivate, setBchpublic, setBchprivate, setLtcpublic, setLtcprivate])
        const signUp=()=>{
               
                fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
                    console.log("Succesful")
                    var id=fire.auth().currentUser.uid   
                firebase.database().ref('User_Info/'+id).set({
                    Firstname: fname,
                    Lastname: lname,
                })
                firebase.database().ref('Currency_Info/'+id).set({
                    BtcPublic: btcp,
                    BtcPrivate: btcpr,
                    EthPublic: ethp,
                    EthPrivate: ethpr,
                    BchPublic: bchp,
                    BchPrivate: bchpr,
                    LtcPublic: ltcp,
                    LtcPrivate: ltcpr,
                })
                firebase.database().ref('User_Info/'+id).once('value').then((snapshot)=>{
                setFname(snapshot.val() && snapshot.val().Firstname) 
                })
                }).catch((err)=>{console.log("Error")
            })
        }  
        return (
            <>
                <div style={Style.container}>
                <div style={Style.element}>
                <Header as='h2' icon textAlign='center' color='olive' style={Style.header}>
                    <Icon name='add user' color='olive' inverted/>
                    <Header.Content>Create Account</Header.Content>
                </Header>
                <Form onSubmit={signUp}>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='First Name'
                        placeholder='First Name'
                        value={fname} 
                        onChange={(e)=>setFname(e.target.value)}
                    />
                        <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Last Name'
                        placeholder='Last Name'
                        value={lname} 
                        onChange={(e)=>setLname(e.target.value)}
                    />
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        label='Email'
                        type='email'
                        placeholder='Email'
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}    
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='Password'
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                        
                    />
                    <p> minimum 6 characters </p>
                        <Checkbox label="I agree to the all terms and conditions" />
                        <div className="text-center">
                        <Button type="submit" style={{paddingInline:'2rem'}}> Submit </Button> 
                        </div>
                    </Form>
                 </div>        
                </div>
            </>            
        )
    }
export  default Register;