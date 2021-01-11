import React,{Component} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
export default class Info extends Component {
    constructor () {
        super();
        this.state = {
          first:"Lazy",
          last:"Sleeper",
          email:"lazysleeper@cse.pstu.ac.bd",
          birthday:"",
          address:"",
          city:"",
          postcode:"",
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
            <Segment inverted basic textAlign={"center"}>
                <Form inverted>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name'
                    type="text" id="first" value={this.state.first} placeholder="First Name" onChange={this.handleChange}/>
                    <Form.Input fluid label='Last name' 
                    type="text" id="last" value={this.state.last} placeholder="Last Name" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email Address'
                    type="email" id="email" value={this.state.house} placeholder="Email Address" onChange={this.handleChange}/>
                    <Form.Input fluid label='Birthday' 
                    type="date" id="birthday" value={this.state.house} placeholder="Birthday" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Address' 
                    type="text" id="address" value={this.state.house} placeholder="#House, #Road" onChange={this.handleChange}/>
                    <Form.Input fluid label='City' 
                    type="text" id="city" value={this.state.house} placeholder="City" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Postcode'
                    type="text" id="postcode" value={this.state.house} placeholder="Postcode" onChange={this.handleChange} />
                    <Form.Input fluid label='Country'
                    type="text" id="country" value={this.state.house} placeholder="Country" onChange={this.handleChange}/> 
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit' onClick={this.submitHandler}>Submit</Button>
                </Form>
            </Segment>

        )
    }
}
