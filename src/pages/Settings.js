import React, { Component } from 'react'
import { Button, Table, Form} from "react-bootstrap";

export default class settings extends Component {
    constructor () {
        super();
        this.state = {
          name:"Lazy Sleeper",
          email:"lazysleeper@cse.pstu.ac.bd",
          birthday:"",
          house:"",
          road:"",
          postcode:"",
          city:"",
          country:""

        }
      } 
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })    
    }
    submitHandler=(e)=>{
        e.preventDefault();
        alert('Info saved successfully')
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h3 style={{marginBlock:"2rem"}}>Personal Information</h3>
                <Table variant="dark" style={{textAlign:"left"}}>
            <tbody>
                <tr><td>Full Name</td>
                <td>{this.state.name}</td></tr>
                <tr><td>Email Address</td>
                <td>{this.state.email}</td></tr>
                <tr><td>Birthday</td>
                <td><Form.Control type="date" id="birthday" value={this.state.birthday} onChange={this.handleChange}/> </td></tr>
                <tr><td>House No</td>
                <td><Form.Control type="text" id="house" value={this.state.house} placeholder="#House" onChange={this.handleChange}/></td></tr>
                <tr><td>Road No</td>
                <td><Form.Control type="text" id="road"value={this.state.road} placeholder="#Road" onChange={this.handleChange}/></td></tr>
                <tr><td>Postcode</td>
                <td><Form.Control type="text" id="postcode"value={this.state.postcode} placeholder="postcode" onChange={this.handleChange}/></td></tr>
                <tr><td>City</td>
                <td><Form.Control type="text" id="city"value={this.state.city} placeholder="city" onChange={this.handleChange}/></td></tr>
                <tr><td>Country</td>
                <td><Form.Control type="text" id="country"value={this.state.country} placeholder="country" onChange={this.handleChange}/></td></tr>
            </tbody>
            </Table>
                    <Button style={{padding:'1rem 10rem',marginBottom:'5rem'}} variant='danger' onClick={this.submitHandler}>Save</Button>    
            </div>
        )
    }
}
