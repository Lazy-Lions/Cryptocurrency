import React,{useEffect, useState} from 'react'
import firebase from 'firebase';
import fire from "../components/config/fire";
import "firebase/auth";
import { Button, Form, Segment} from 'semantic-ui-react'
import { useRecoilState} from "recoil";
import { firstnameState, lastnameState } from '../pages/Register';

    const Info =()=> {
        const [birthday, setBirthday]=useState('')
        const [gender, setGender]=useState(null)
        const [address, setAddress]=useState('')
        const [city, setCity]=useState('')
        const [postcode, setPostcode]=useState('')
        const [country, setCountry]=useState('')
        const [fname, setFname] = useRecoilState(firstnameState)
        const [lname, setLname] = useRecoilState(lastnameState)
        useEffect(() => {
            var id=fire.auth().currentUser.uid  
          firebase.database().ref('User_Info/'+id).once('value').then((snapshot)=>{
            setFname(snapshot.val() && snapshot.val().Firstname)
            setLname(snapshot.val() && snapshot.val().Lastname)
            setBirthday(snapshot.val() && snapshot.val().Birthday)
            setGender(snapshot.val() && snapshot.val().Gender)
            setAddress(snapshot.val() && snapshot.val().Address)
            setCity(snapshot.val() && snapshot.val().City)
            setPostcode(snapshot.val() && snapshot.val().Postcode)
            setCountry(snapshot.val() && snapshot.val().Country)
              
          })
        }, [setFname, setLname, setBirthday, setGender, setAddress, setCity, setPostcode, setCountry])
        const submitHandler=(event)=>{
            alert('Info saved Succesfully')
            event.preventDefault();
            var id=fire.auth().currentUser.uid
            firebase.database().ref('User_Info/'+id).set({
                Firstname: fname,
                Lastname: lname,
                Birthday: birthday,
                Gender: gender,
                Address: address,
                City: city,
                Postcode: postcode,
                Country: country
            })
            
        }
        return (
            <Segment textAlign={"center"} style={{backgroundColor:'#f0f4c3'}}>
                <Form >
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name'
                    type="text" id="first" value={fname} placeholder="First Name" onChange={(e)=>setFname(e.target.value)}/>
                    <Form.Input fluid label='Last name' 
                    type="text" id="last" value={lname} placeholder="Last Name" onChange={(e)=>setLname(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Birthday' 
                    type="date" id="birthday" value={birthday} placeholder="Birthday" onChange={(e)=>setBirthday(e.target.value)}/>
                    <Form.Field >
                        <label>Gender</label>
                        <select 
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                            style={{height:'3rem'}}
                        >
                            <option value='Select-Gender' >----</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Address' 
                    type="text" id="address"  placeholder="#House, #Road" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <Form.Input fluid label='City' 
                    type="text" id="city"  placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Postcode'
                    type="text" id="postcode"  placeholder="Postcode" value={postcode}  onChange={(e)=>setPostcode(e.target.value)}/>
                    <Form.Input fluid label='Country'
                    type="text" id="country"  placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)}/> 
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit' onClick={submitHandler} >Submit</Button>
                </Form>
            </Segment>

        )
    }

export default Info